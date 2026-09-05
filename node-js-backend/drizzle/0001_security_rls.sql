-- Custom SQL migration file, put your code below! --
-- Edyn Phase 0 Supabase security boundary.
-- The Node API uses the service-role key and still performs ownership checks.
-- These policies protect direct Supabase access from authenticated clients.

alter table public.profiles add constraint profiles_auth_user_fk
  foreign key (id) references auth.users(id) on delete cascade;

create or replace function public.current_user_role()
returns public.user_role
language sql
stable
security definer
set search_path = public
set row_security = off
as $$
  select role from public.profiles where id = auth.uid();
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
set row_security = off
as $$
  select coalesce(public.current_user_role() = 'ADMIN'::public.user_role, false);
$$;

create or replace function public.owns_child(target_child_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
set row_security = off
as $$
  select exists (
    select 1 from public.children
    where id = target_child_id and parent_id = auth.uid()
  );
$$;

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, role)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(coalesce(new.email, 'Edyn Parent'), '@', 1)),
    'PARENT'::public.user_role
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_auth_user();

grant execute on function public.current_user_role() to authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.owns_child(uuid) to authenticated;

alter table public.profiles enable row level security;
alter table public.children enable row level security;
alter table public.worlds enable row level security;
alter table public.subjects enable row level security;
alter table public.lessons enable row level security;
alter table public.activities enable row level security;
alter table public.skills enable row level security;
alter table public.activity_skills enable row level security;
alter table public.game_definitions enable row level security;
alter table public.game_versions enable row level security;
alter table public.activity_games enable row level security;
alter table public.game_version_skills enable row level security;
alter table public.game_attempts enable row level security;
alter table public.activity_progress enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.child_skill_mastery enable row level security;
alter table public.reward_transactions enable row level security;

revoke all on all tables in schema public from anon;
grant select, insert, update, delete on all tables in schema public to authenticated;

create policy profiles_select_self on public.profiles
  for select to authenticated
  using (id = auth.uid() or public.is_admin());

create policy profiles_update_self on public.profiles
  for update to authenticated
  using (id = auth.uid() or public.is_admin())
  with check (
    public.is_admin()
    or (id = auth.uid() and role = public.current_user_role())
  );

create policy profiles_admin_insert on public.profiles
  for insert to authenticated
  with check (public.is_admin());

create policy profiles_admin_delete on public.profiles
  for delete to authenticated
  using (public.is_admin());

create policy children_parent_select on public.children
  for select to authenticated
  using (parent_id = auth.uid() or public.is_admin());
create policy children_parent_insert on public.children
  for insert to authenticated
  with check (parent_id = auth.uid() or public.is_admin());
create policy children_parent_update on public.children
  for update to authenticated
  using (parent_id = auth.uid() or public.is_admin())
  with check (parent_id = auth.uid() or public.is_admin());
create policy children_parent_delete on public.children
  for delete to authenticated
  using (parent_id = auth.uid() or public.is_admin());

create policy subjects_authenticated_read on public.subjects
  for select to authenticated using (true);
create policy worlds_published_read on public.worlds
  for select to authenticated using (status = 'PUBLISHED' or public.is_admin());
create policy lessons_published_read on public.lessons
  for select to authenticated using (status = 'PUBLISHED' or public.is_admin());
create policy activities_published_read on public.activities
  for select to authenticated using (status = 'PUBLISHED' or public.is_admin());
create policy skills_authenticated_read on public.skills
  for select to authenticated using (true);

create policy activity_skills_published_read on public.activity_skills
  for select to authenticated using (
    public.is_admin() or exists (
      select 1 from public.activities
      where activities.id = activity_skills.activity_id
        and activities.status = 'PUBLISHED'
    )
  );

create policy game_definitions_published_read on public.game_definitions
  for select to authenticated using (status = 'PUBLISHED' or public.is_admin());
create policy game_versions_published_read on public.game_versions
  for select to authenticated using (published_at is not null or public.is_admin());
create policy activity_games_published_read on public.activity_games
  for select to authenticated using (
    public.is_admin() or exists (
      select 1 from public.activities
      where activities.id = activity_games.activity_id
        and activities.status = 'PUBLISHED'
    )
  );
create policy game_version_skills_published_read on public.game_version_skills
  for select to authenticated using (
    public.is_admin() or exists (
      select 1 from public.game_versions
      where game_versions.id = game_version_skills.game_version_id
        and game_versions.published_at is not null
    )
  );

create policy game_attempts_parent_read on public.game_attempts
  for select to authenticated using (public.owns_child(child_id) or public.is_admin());
create policy activity_progress_parent_read on public.activity_progress
  for select to authenticated using (public.owns_child(child_id) or public.is_admin());
create policy lesson_progress_parent_read on public.lesson_progress
  for select to authenticated using (public.owns_child(child_id) or public.is_admin());
create policy child_skill_mastery_parent_read on public.child_skill_mastery
  for select to authenticated using (public.owns_child(child_id) or public.is_admin());
create policy reward_transactions_parent_read on public.reward_transactions
  for select to authenticated using (public.owns_child(child_id) or public.is_admin());

create policy worlds_admin_write on public.worlds for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy subjects_admin_write on public.subjects for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy lessons_admin_write on public.lessons for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy activities_admin_write on public.activities for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy skills_admin_write on public.skills for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy activity_skills_admin_write on public.activity_skills for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy game_definitions_admin_write on public.game_definitions for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy game_versions_admin_write on public.game_versions for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy activity_games_admin_write on public.activity_games for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy game_version_skills_admin_write on public.game_version_skills for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy game_attempts_admin_write on public.game_attempts for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy activity_progress_admin_write on public.activity_progress for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy lesson_progress_admin_write on public.lesson_progress for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy child_skill_mastery_admin_write on public.child_skill_mastery for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy reward_transactions_admin_write on public.reward_transactions for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
