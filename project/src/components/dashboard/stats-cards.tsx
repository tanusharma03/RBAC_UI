import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Shield, Activity } from 'lucide-react';

interface StatsCardsProps {
  totalUsers: number;
  activeUsers: number;
  totalRoles: number;
  recentActivities: number;
}

export function StatsCards({
  totalUsers,
  activeUsers,
  totalRoles,
  recentActivities,
}: StatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="hover-lift bg-white/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-primary">Users</CardTitle>
          <Users className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalUsers}</div>
          <p className="text-xs text-muted-foreground">
            {activeUsers} active users
          </p>
        </CardContent>
      </Card>
      <Card className="hover-lift bg-white/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-primary">Roles</CardTitle>
          <Shield className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalRoles}</div>
          <p className="text-xs text-muted-foreground">
            Across all departments
          </p>
        </CardContent>
      </Card>
      <Card className="hover-lift bg-white/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-primary">Activity</CardTitle>
          <Activity className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{recentActivities}</div>
          <p className="text-xs text-muted-foreground">
            Recent activities today
          </p>
        </CardContent>
      </Card>
    </div>
  );
}