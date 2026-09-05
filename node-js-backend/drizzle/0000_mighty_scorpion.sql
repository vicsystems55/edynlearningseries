CREATE TYPE "public"."activity_type" AS ENUM('VIDEO', 'AUDIO', 'TEXT', 'GAME', 'QUIZ', 'WORKSHEET', 'PRACTICE');--> statement-breakpoint
CREATE TYPE "public"."attempt_status" AS ENUM('STARTED', 'COMPLETED', 'ABANDONED');--> statement-breakpoint
CREATE TYPE "public"."mastery_level" AS ENUM('NOT_STARTED', 'INTRODUCED', 'PRACTISING', 'DEVELOPING', 'MASTERED');--> statement-breakpoint
CREATE TYPE "public"."publication_status" AS ENUM('DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED');--> statement-breakpoint
CREATE TYPE "public"."reward_type" AS ENUM('XP', 'COIN');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('PARENT', 'ADMIN');--> statement-breakpoint
CREATE TABLE "children" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"parent_id" uuid NOT NULL,
	"first_name" text NOT NULL,
	"date_of_birth" date,
	"class_level" text,
	"avatar_key" text,
	"preferred_language" text DEFAULT 'en' NOT NULL,
	"learning_preferences" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"display_name" text NOT NULL,
	"role" "user_role" DEFAULT 'PARENT' NOT NULL,
	"timezone" text DEFAULT 'Africa/Lagos' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lesson_id" uuid NOT NULL,
	"type" "activity_type" NOT NULL,
	"title" text NOT NULL,
	"instructions" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"content" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"completion_rule" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"estimated_minutes" integer DEFAULT 5 NOT NULL,
	"status" "publication_status" DEFAULT 'DRAFT' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activity_skills" (
	"activity_id" uuid NOT NULL,
	"skill_id" uuid NOT NULL,
	"weight" integer DEFAULT 100 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lessons" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"world_id" uuid NOT NULL,
	"subject_id" uuid NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"learning_objectives" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"estimated_minutes" integer DEFAULT 5 NOT NULL,
	"status" "publication_status" DEFAULT 'DRAFT' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"subject_id" uuid NOT NULL,
	"code" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subjects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "worlds" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"status" "publication_status" DEFAULT 'DRAFT' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activity_games" (
	"activity_id" uuid PRIMARY KEY NOT NULL,
	"game_version_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "game_definitions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"key" text NOT NULL,
	"title" text NOT NULL,
	"game_type" text NOT NULL,
	"status" "publication_status" DEFAULT 'DRAFT' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "game_version_skills" (
	"game_version_id" uuid NOT NULL,
	"skill_id" uuid NOT NULL,
	"weight" integer DEFAULT 100 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "game_versions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"game_definition_id" uuid NOT NULL,
	"version" integer NOT NULL,
	"configuration" jsonb NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activity_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"activity_id" uuid NOT NULL,
	"status" text DEFAULT 'NOT_STARTED' NOT NULL,
	"best_score" integer DEFAULT 0 NOT NULL,
	"attempt_count" integer DEFAULT 0 NOT NULL,
	"time_spent_seconds" integer DEFAULT 0 NOT NULL,
	"completed_at" timestamp with time zone,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "child_skill_mastery" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"skill_id" uuid NOT NULL,
	"mastery_level" "mastery_level" DEFAULT 'NOT_STARTED' NOT NULL,
	"mastery_score" numeric(5, 2) DEFAULT '0' NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"last_practised_at" timestamp with time zone,
	"mastered_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "game_attempts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"activity_id" uuid NOT NULL,
	"game_version_id" uuid NOT NULL,
	"status" "attempt_status" DEFAULT 'STARTED' NOT NULL,
	"score" integer,
	"maximum_score" integer,
	"accuracy_percentage" numeric(5, 2),
	"response" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"completed_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "lesson_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"lesson_id" uuid NOT NULL,
	"progress_percentage" numeric(5, 2) DEFAULT '0' NOT NULL,
	"completed_at" timestamp with time zone,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reward_transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"type" "reward_type" NOT NULL,
	"amount" integer NOT NULL,
	"reason" text NOT NULL,
	"source_type" text NOT NULL,
	"source_id" uuid,
	"idempotency_key" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "children" ADD CONSTRAINT "children_parent_id_profiles_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activities" ADD CONSTRAINT "activities_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_skills" ADD CONSTRAINT "activity_skills_activity_id_activities_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_skills" ADD CONSTRAINT "activity_skills_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_world_id_worlds_id_fk" FOREIGN KEY ("world_id") REFERENCES "public"."worlds"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skills" ADD CONSTRAINT "skills_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_games" ADD CONSTRAINT "activity_games_activity_id_activities_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_games" ADD CONSTRAINT "activity_games_game_version_id_game_versions_id_fk" FOREIGN KEY ("game_version_id") REFERENCES "public"."game_versions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game_version_skills" ADD CONSTRAINT "game_version_skills_game_version_id_game_versions_id_fk" FOREIGN KEY ("game_version_id") REFERENCES "public"."game_versions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game_version_skills" ADD CONSTRAINT "game_version_skills_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game_versions" ADD CONSTRAINT "game_versions_game_definition_id_game_definitions_id_fk" FOREIGN KEY ("game_definition_id") REFERENCES "public"."game_definitions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_progress" ADD CONSTRAINT "activity_progress_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity_progress" ADD CONSTRAINT "activity_progress_activity_id_activities_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "child_skill_mastery" ADD CONSTRAINT "child_skill_mastery_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "child_skill_mastery" ADD CONSTRAINT "child_skill_mastery_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game_attempts" ADD CONSTRAINT "game_attempts_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game_attempts" ADD CONSTRAINT "game_attempts_activity_id_activities_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."activities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game_attempts" ADD CONSTRAINT "game_attempts_game_version_id_game_versions_id_fk" FOREIGN KEY ("game_version_id") REFERENCES "public"."game_versions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_progress" ADD CONSTRAINT "lesson_progress_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_progress" ADD CONSTRAINT "lesson_progress_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reward_transactions" ADD CONSTRAINT "reward_transactions_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "children_parent_idx" ON "children" USING btree ("parent_id");--> statement-breakpoint
CREATE UNIQUE INDEX "children_parent_name_idx" ON "children" USING btree ("parent_id","first_name");--> statement-breakpoint
CREATE INDEX "activities_lesson_idx" ON "activities" USING btree ("lesson_id");--> statement-breakpoint
CREATE UNIQUE INDEX "activity_skills_unique_idx" ON "activity_skills" USING btree ("activity_id","skill_id");--> statement-breakpoint
CREATE UNIQUE INDEX "lessons_world_slug_idx" ON "lessons" USING btree ("world_id","slug");--> statement-breakpoint
CREATE INDEX "lessons_subject_idx" ON "lessons" USING btree ("subject_id");--> statement-breakpoint
CREATE UNIQUE INDEX "skills_code_idx" ON "skills" USING btree ("code");--> statement-breakpoint
CREATE UNIQUE INDEX "subjects_slug_idx" ON "subjects" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "worlds_slug_idx" ON "worlds" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "game_definitions_key_idx" ON "game_definitions" USING btree ("key");--> statement-breakpoint
CREATE INDEX "game_version_skills_game_idx" ON "game_version_skills" USING btree ("game_version_id");--> statement-breakpoint
CREATE UNIQUE INDEX "game_versions_unique_idx" ON "game_versions" USING btree ("game_definition_id","version");--> statement-breakpoint
CREATE UNIQUE INDEX "activity_progress_unique_idx" ON "activity_progress" USING btree ("child_id","activity_id");--> statement-breakpoint
CREATE UNIQUE INDEX "child_skill_mastery_unique_idx" ON "child_skill_mastery" USING btree ("child_id","skill_id");--> statement-breakpoint
CREATE INDEX "game_attempts_child_idx" ON "game_attempts" USING btree ("child_id","started_at");--> statement-breakpoint
CREATE INDEX "game_attempts_activity_idx" ON "game_attempts" USING btree ("activity_id");--> statement-breakpoint
CREATE UNIQUE INDEX "lesson_progress_unique_idx" ON "lesson_progress" USING btree ("child_id","lesson_id");--> statement-breakpoint
CREATE UNIQUE INDEX "reward_transactions_idempotency_idx" ON "reward_transactions" USING btree ("idempotency_key");--> statement-breakpoint
CREATE INDEX "reward_transactions_child_idx" ON "reward_transactions" USING btree ("child_id","created_at");