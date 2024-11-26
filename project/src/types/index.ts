export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'active' | 'inactive';
  avatar?: string;
  lastActive?: string;
  createdAt: string;
  department?: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
  usersCount: number;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  module: Module;
  actions: Action[];
}

export type Module = 'users' | 'roles' | 'settings' | 'reports' | 'analytics';
export type Action = 'create' | 'read' | 'update' | 'delete';

export interface ActivityLog {
  id: string;
  user: User;
  action: string;
  target: string;
  timestamp: string;
  details?: string;
}