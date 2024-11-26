import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Users,
  Shield,
  Settings,
  BarChart,
  FileText,
  Menu,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'flex flex-col h-screen border-r transition-all bg-white/50 backdrop-blur-sm',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <div className="p-4 border-b flex justify-between items-center bg-white/80">
        {!collapsed && (
          <div className="flex items-center gap-2 font-semibold text-primary">
            <Zap className="h-5 w-5" />
            <span>Dashboard</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn('shrink-0 text-primary', collapsed && 'mx-auto')}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          <NavItem
            icon={<Users className="h-4 w-4" />}
            label="Users"
            collapsed={collapsed}
            active
          />
          <NavItem
            icon={<Shield className="h-4 w-4" />}
            label="Roles"
            collapsed={collapsed}
          />
          <NavItem
            icon={<BarChart className="h-4 w-4" />}
            label="Analytics"
            collapsed={collapsed}
          />
          <NavItem
            icon={<FileText className="h-4 w-4" />}
            label="Reports"
            collapsed={collapsed}
          />
          <NavItem
            icon={<Settings className="h-4 w-4" />}
            label="Settings"
            collapsed={collapsed}
          />
        </ul>
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  active?: boolean;
}

function NavItem({ icon, label, collapsed, active }: NavItemProps) {
  return (
    <li>
      <Button
        variant={active ? 'secondary' : 'ghost'}
        className={cn(
          'w-full justify-start transition-all hover:bg-primary/10',
          collapsed ? 'px-2' : 'px-4',
          active && 'bg-primary/10 text-primary hover:bg-primary/20'
        )}
      >
        {icon}
        {!collapsed && <span className="ml-2">{label}</span>}
      </Button>
    </li>
  );
}