import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { UserTable } from '@/components/users/user-table';
import { RoleCard } from '@/components/roles/role-card';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { ActivityList } from '@/components/activity/activity-list';
import { Button } from '@/components/ui/button';
import { Plus, Users, Shield } from 'lucide-react';
import { users, roles, activityLogs } from '@/data/mock';
import { User, Role } from '@/types';

export default function App() {
  const [selectedTab, setSelectedTab] = useState<'users' | 'roles'>('users');

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (user: User) => {
    console.log('Delete user:', user);
  };

  const handleEditRole = (role: Role) => {
    console.log('Edit role:', role);
  };

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter((u) => u.status === 'active').length,
    totalRoles: roles.length,
    recentActivities: activityLogs.length,
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="h-14 border-b px-4 flex items-center justify-between bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            {selectedTab === 'users' ? (
              <Users className="h-5 w-5 text-primary" />
            ) : (
              <Shield className="h-5 w-5 text-primary" />
            )}
            <h1 className="text-lg font-semibold text-primary">
              {selectedTab === 'users' ? 'Users' : 'Roles'}
            </h1>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add {selectedTab === 'users' ? 'User' : 'Role'}
          </Button>
        </div>

        <div className="p-4 space-y-4">
          <StatsCards {...stats} />

          <div className="mb-6 flex gap-2">
            <Button
              variant={selectedTab === 'users' ? 'default' : 'outline'}
              onClick={() => setSelectedTab('users')}
              className={selectedTab === 'users' 
                ? 'bg-primary hover:bg-primary/90' 
                : 'hover:bg-primary/10 border-primary/20'
              }
            >
              <Users className="h-4 w-4 mr-2" />
              Users
            </Button>
            <Button
              variant={selectedTab === 'roles' ? 'default' : 'outline'}
              onClick={() => setSelectedTab('roles')}
              className={selectedTab === 'roles' 
                ? 'bg-primary hover:bg-primary/90' 
                : 'hover:bg-primary/10 border-primary/20'
              }
            >
              <Shield className="h-4 w-4 mr-2" />
              Roles
            </Button>
          </div>

          <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
            <div className="lg:col-span-3">
              {selectedTab === 'users' ? (
                <UserTable
                  users={users}
                  onEdit={handleEditUser}
                  onDelete={handleDeleteUser}
                />
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  {roles.map((role) => (
                    <RoleCard
                      key={role.id}
                      role={role}
                      onEdit={handleEditRole}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold text-primary mb-4">Recent Activity</h2>
              <ActivityList activities={activityLogs} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}