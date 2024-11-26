import { User, Role, Permission, ActivityLog } from '@/types';

export const permissions: Permission[] = [
  {
    id: '1',
    name: 'Users Management',
    description: 'Manage system users',
    module: 'users',
    actions: ['create', 'read', 'update', 'delete'],
  },
  {
    id: '2',
    name: 'Roles Management',
    description: 'Manage user roles',
    module: 'roles',
    actions: ['create', 'read', 'update', 'delete'],
  },
  {
    id: '3',
    name: 'Analytics Access',
    description: 'Access analytics data',
    module: 'analytics',
    actions: ['read'],
  },
  {
    id: '4',
    name: 'Reports Management',
    description: 'Manage system reports',
    module: 'reports',
    actions: ['create', 'read', 'update', 'delete'],
  },
  {
    id: '5',
    name: 'Settings Management',
    description: 'Manage system settings',
    module: 'settings',
    actions: ['read', 'update'],
  },
];

export const roles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: permissions,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    usersCount: 2,
  },
  {
    id: '2',
    name: 'Editor',
    description: 'Content management access',
    permissions: permissions.filter((p) => !p.name.includes('Settings')),
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
    usersCount: 5,
  },
  {
    id: '3',
    name: 'Viewer',
    description: 'Read-only access',
    permissions: permissions.filter((p) => p.actions.includes('read')),
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
    usersCount: 10,
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: roles[0],
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastActive: '2024-03-20T15:30:00Z',
    createdAt: '2024-01-01T00:00:00Z',
    department: 'IT',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: roles[1],
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastActive: '2024-03-20T14:45:00Z',
    createdAt: '2024-01-02T00:00:00Z',
    department: 'Marketing',
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    role: roles[2],
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastActive: '2024-03-19T10:15:00Z',
    createdAt: '2024-01-03T00:00:00Z',
    department: 'Sales',
  },
];

export const activityLogs: ActivityLog[] = [
  {
    id: '1',
    user: users[0],
    action: 'created',
    target: 'role',
    timestamp: '2024-03-20T15:30:00Z',
    details: 'Created new role: Support Team',
  },
  {
    id: '2',
    user: users[0],
    action: 'updated',
    target: 'user',
    timestamp: '2024-03-20T14:45:00Z',
    details: 'Updated user permissions for Jane Smith',
  },
  {
    id: '3',
    user: users[1],
    action: 'deleted',
    target: 'role',
    timestamp: '2024-03-20T13:15:00Z',
    details: 'Deleted role: Guest',
  },
];