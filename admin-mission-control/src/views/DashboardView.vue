<script setup>
import { Activity, ArrowUpRight, BookOpenCheck, CircleDollarSign, Gamepad2, MoreHorizontal, UsersRound } from '@lucide/vue'
import MetricCard from '../components/MetricCard.vue'

const metrics = [
  { label: 'Active learners', value: '12,480', change: '+8.2% this month', tone: 'green', icon: UsersRound },
  { label: 'Published lessons', value: '428', change: '16 awaiting review', tone: 'gold', icon: BookOpenCheck },
  { label: 'Games completed', value: '84.2K', change: '+12.4% this month', tone: 'purple', icon: Gamepad2 },
  { label: 'Monthly revenue', value: '₦8.6M', change: '+6.8% this month', tone: 'coral', icon: CircleDollarSign },
]

const activity = [
  ['Alphabet Forest v1.2 published', 'Content', '2 minutes ago'],
  ['New parent account verified', 'Account', '8 minutes ago'],
  ['Starter subscription activated', 'Billing', '14 minutes ago'],
  ['Nursery mathematics lesson edited', 'Curriculum', '31 minutes ago'],
]
</script>

<template>
  <div class="page-stack">
    <section class="page-heading">
      <div><span class="eyebrow">Thursday, 3 September</span><h1>Good evening, Edyn team.</h1><p>Here is what is happening across the learning platform.</p></div>
      <RouterLink class="primary-button" to="/content">Create content <ArrowUpRight :size="18" /></RouterLink>
    </section>

    <section class="metrics-grid">
      <MetricCard v-for="metric in metrics" :key="metric.label" v-bind="metric" />
    </section>

    <section class="dashboard-grid">
      <article class="panel chart-panel">
        <div class="panel-heading"><div><span class="eyebrow">Platform engagement</span><h2>Learning activity</h2></div><select aria-label="Chart period"><option>Last 7 days</option><option>Last 30 days</option></select></div>
        <div class="chart-wrap" aria-label="Example activity chart">
          <div class="chart-y"><span>12k</span><span>9k</span><span>6k</span><span>3k</span><span>0</span></div>
          <div class="bars">
            <div v-for="(height, day) in { Mon: 54, Tue: 72, Wed: 61, Thu: 89, Fri: 78, Sat: 48, Sun: 66 }" :key="day" class="bar-column"><div class="bar" :style="{ height: `${height}%` }" /><span>{{ day }}</span></div>
          </div>
        </div>
      </article>

      <article class="panel health-panel">
        <div class="panel-heading"><div><span class="eyebrow">Live services</span><h2>System health</h2></div><span class="status-live"><i /> Operational</span></div>
        <ul class="health-list">
          <li><span>Node API</span><strong>99.99%</strong><i /></li>
          <li><span>PostgreSQL</span><strong>18 ms</strong><i /></li>
          <li><span>Object storage</span><strong>99.98%</strong><i /></li>
          <li><span>Email delivery</span><strong>99.92%</strong><i /></li>
        </ul>
      </article>

      <article class="panel activity-panel">
        <div class="panel-heading"><div><span class="eyebrow">Latest events</span><h2>Recent activity</h2></div><button class="icon-button"><MoreHorizontal /></button></div>
        <div class="activity-list">
          <div v-for="item in activity" :key="item[0]" class="activity-row"><span class="activity-icon"><Activity :size="17" /></span><div><strong>{{ item[0] }}</strong><span>{{ item[1] }}</span></div><time>{{ item[2] }}</time></div>
        </div>
      </article>

      <article class="panel actions-panel">
        <div class="panel-heading"><div><span class="eyebrow">Workflow</span><h2>Needs attention</h2></div></div>
        <RouterLink to="/content"><span><strong>16</strong> content items awaiting review</span><ArrowUpRight /></RouterLink>
        <RouterLink to="/support"><span><strong>7</strong> open parent support requests</span><ArrowUpRight /></RouterLink>
        <RouterLink to="/subscriptions"><span><strong>3</strong> failed subscription renewals</span><ArrowUpRight /></RouterLink>
      </article>
    </section>
  </div>
</template>
