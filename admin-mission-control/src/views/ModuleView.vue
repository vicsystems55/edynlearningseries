<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Download, Filter, Plus, Search, SlidersHorizontal } from '@lucide/vue'

const route = useRoute()
const modules = {
  users: { description: 'Manage parent accounts, permissions, verification and access.', action: 'Invite administrator', columns: ['Account', 'Plan', 'Children', 'Status'], rows: [['Amara Okafor', 'Explorer', '2', 'Active'], ['Kunle Bello', 'Starter', '1', 'Active'], ['Zainab Musa', 'Free', '1', 'Review']] },
  learners: { description: 'Support learner profiles, grade placement and safeguarding.', action: 'Add learner', columns: ['Learner', 'Level', 'Progress', 'Status'], rows: [['Tunde Adeola', 'Nursery 2', '84%', 'Active'], ['Ada Nwosu', 'Primary 1', '71%', 'Active'], ['Amina Yusuf', 'Nursery 1', '42%', 'Paused']] },
  curriculum: { description: 'Organise worlds, subjects, lessons, activities and learning skills.', action: 'New lesson', columns: ['Curriculum item', 'Level', 'Activities', 'State'], rows: [['Alphabet Forest', 'Nursery 1', '18', 'Published'], ['Number Garden', 'Nursery 1', '12', 'Draft'], ['Story Savannah', 'Primary 1', '24', 'Review']] },
  games: { description: 'Create reusable game definitions and publish immutable versions.', action: 'New game definition', columns: ['Game', 'Renderer', 'Version', 'State'], rows: [['Find Letter A', 'FIND_IT', '1.0.0', 'Published'], ['Shape Match', 'MATCH_IT', '0.4.0', 'Draft'], ['Memory Safari', 'MEMORY_MATCH', '0.8.0', 'Testing']] },
  content: { description: 'Review and publish worksheets, media, lesson copy and downloadable resources.', action: 'Create content', columns: ['Content', 'Type', 'Owner', 'State'], rows: [['Letter A activity', 'Interactive', 'Learning team', 'Review'], ['Counting to ten', 'Video', 'Media team', 'Published'], ['Our Nigerian stories', 'E-book', 'Editorial', 'Draft']] },
  progress: { description: 'Explore completion, mastery, retention and learner engagement.', action: 'Export report', columns: ['Cohort', 'Learners', 'Completion', 'Trend'], rows: [['Nursery 1', '4,218', '78%', '+8.2%'], ['Nursery 2', '3,801', '81%', '+5.4%'], ['Primary 1', '2,964', '73%', '+6.1%']] },
  rewards: { description: 'Monitor XP, coins, badges and reward-ledger integrity.', action: 'Create badge', columns: ['Reward', 'Type', 'Issued', 'State'], rows: [['Alphabet Explorer', 'Badge', '4,821', 'Active'], ['Daily Spark', 'XP rule', '18,640', 'Active'], ['Reading Champion', 'Badge', '2,104', 'Active']] },
  subscriptions: { description: 'Administer plans, billing events, renewals and entitlements.', action: 'Create plan', columns: ['Plan', 'Subscribers', 'Monthly value', 'State'], rows: [['Explorer', '1,820', '₦8.19M', 'Active'], ['Starter', '964', '₦2.41M', 'Active'], ['Champion', '311', '₦2.33M', 'Active']] },
  support: { description: 'Resolve parent requests and track service response targets.', action: 'New ticket', columns: ['Request', 'Parent', 'Priority', 'Status'], rows: [['Cannot open lesson', 'Ngozi Umeh', 'High', 'Open'], ['Update learner level', 'Femi Cole', 'Normal', 'Pending'], ['Receipt request', 'Bisi James', 'Low', 'Resolved']] },
  audit: { description: 'Review security-sensitive changes and administrator activity.', action: 'Export logs', columns: ['Event', 'Actor', 'Target', 'Time'], rows: [['Game version published', 'admin@edyn.ng', 'Find Letter A', '2m ago'], ['Role updated', 'owner@edyn.ng', 'Content editor', '18m ago'], ['Plan price edited', 'owner@edyn.ng', 'Explorer', '1h ago']] },
  settings: { description: 'Configure environments, integrations, roles and platform controls.', action: 'Add integration', columns: ['Configuration', 'Provider', 'Environment', 'Status'], rows: [['Primary database', 'Supabase', 'Production', 'Connected'], ['Transactional email', 'Resend', 'Production', 'Pending'], ['Source repository', 'GitHub', 'Development', 'Connected']] },
}

const content = computed(() => modules[route.meta.module] || modules.users)
</script>

<template>
  <div class="page-stack">
    <section class="page-heading">
      <div><span class="eyebrow">Mission Control</span><h1>{{ route.meta.title }}</h1><p>{{ content.description }}</p></div>
      <button class="primary-button"><Plus :size="18" /> {{ content.action }}</button>
    </section>

    <section class="module-summary">
      <article><span>Total records</span><strong>{{ content.rows.length === 3 ? '3,204' : content.rows.length }}</strong><small>Across the platform</small></article>
      <article><span>Updated today</span><strong>28</strong><small>Latest sync 2m ago</small></article>
      <article><span>Needs attention</span><strong>7</strong><small>Review required</small></article>
    </section>

    <section class="panel records-panel">
      <div class="records-toolbar">
        <label><Search :size="18" /><input type="search" placeholder="Search records..." /></label>
        <div><button class="secondary-button"><Filter :size="17" /> Filter</button><button class="secondary-button"><Download :size="17" /> Export</button><button class="icon-button"><SlidersHorizontal :size="19" /></button></div>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr><th v-for="column in content.columns" :key="column">{{ column }}</th><th aria-label="Actions" /></tr></thead>
          <tbody><tr v-for="row in content.rows" :key="row[0]"><td v-for="(cell, index) in row" :key="cell"><strong v-if="index === 0">{{ cell }}</strong><span v-else :class="{ badge: index === row.length - 1 }">{{ cell }}</span></td><td><button class="row-action">View</button></td></tr></tbody>
        </table>
      </div>
      <div class="pagination"><span>Showing 1–3 of 3 records</span><div><button disabled>Previous</button><button>Next</button></div></div>
    </section>
  </div>
</template>
