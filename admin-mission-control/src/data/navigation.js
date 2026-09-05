import {
  BarChart3,
  BookOpenCheck,
  Boxes,
  CircleDollarSign,
  FileClock,
  Gamepad2,
  Gift,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Users,
  UsersRound,
} from '@lucide/vue'

export const navigationGroups = [
  {
    label: 'Operations',
    items: [
      { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
      { label: 'Parents & accounts', to: '/users', icon: Users },
      { label: 'Learners', to: '/learners', icon: UsersRound },
    ],
  },
  {
    label: 'Learning system',
    items: [
      { label: 'Curriculum', to: '/curriculum', icon: BookOpenCheck },
      { label: 'Game library', to: '/games', icon: Gamepad2 },
      { label: 'Content studio', to: '/content', icon: Boxes },
      { label: 'Analytics', to: '/progress', icon: BarChart3 },
      { label: 'Rewards', to: '/rewards', icon: Gift },
    ],
  },
  {
    label: 'Business & system',
    items: [
      { label: 'Subscriptions', to: '/subscriptions', icon: CircleDollarSign },
      { label: 'Support', to: '/support', icon: LifeBuoy },
      { label: 'Audit logs', to: '/audit-logs', icon: FileClock },
      { label: 'Settings', to: '/settings', icon: Settings },
    ],
  },
]
