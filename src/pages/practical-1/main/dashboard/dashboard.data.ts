import type { StatCard, ActivityItem } from './dashboard.type';

export const STATS: StatCard[] = [
  { label: 'Total Users', value: '1,284', emoji: '👥', color: '#6C63FF' },
  { label: 'Revenue', value: '$8,430', emoji: '💰', color: '#22C55E' },
  { label: 'Orders', value: '342', emoji: '📦', color: '#F59E0B' },
  { label: 'Support Tickets', value: '14', emoji: '🎫', color: '#EF4444' },
];

export const RECENT_ACTIVITIES: ActivityItem[] = [
  { id: '1', text: 'Alice signed up', time: '2 min ago', emoji: '✅' },
  { id: '2', text: 'Order #1042 placed', time: '10 min ago', emoji: '📦' },
  { id: '3', text: 'Bob updated profile', time: '25 min ago', emoji: '👤' },
  { id: '4', text: 'Payment received', time: '1 hr ago', emoji: '💳' },
];
