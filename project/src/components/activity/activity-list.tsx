import { ScrollArea } from '@/components/ui/scroll-area';
import { ActivityLog } from '@/types';
import { formatDistanceToNow } from 'date-fns';

interface ActivityListProps {
  activities: ActivityLog[];
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <ScrollArea className="h-[300px] rounded-lg border bg-white/50 backdrop-blur-sm p-4">
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 text-sm"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-primary">
                {activity.user.name}
              </p>
              <p className="text-muted-foreground">
                {activity.details}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}