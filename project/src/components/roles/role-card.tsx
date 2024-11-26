import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pencil, Users as UsersIcon } from 'lucide-react';
import { Role } from '@/types';
import { formatDistanceToNow } from 'date-fns';

interface RoleCardProps {
  role: Role;
  onEdit: (role: Role) => void;
}

export function RoleCard({ role, onEdit }: RoleCardProps) {
  return (
    <Card className="hover-lift bg-white/50 backdrop-blur-sm border-primary/10">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-sm font-medium text-primary">
            {role.name}
          </CardTitle>
          <CardDescription className="text-xs">
            Last updated {formatDistanceToNow(new Date(role.updatedAt), { addSuffix: true })}
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(role)}
          className="hover:bg-primary/10"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {role.description}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <UsersIcon className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            {role.usersCount} users
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {role.permissions.map((permission) => (
            <Badge
              key={permission.id}
              variant="outline"
              className="text-xs bg-primary/10 text-primary border-primary/20"
            >
              {permission.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}