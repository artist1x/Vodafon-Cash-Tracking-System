import { format, startOfDay, startOfWeek, startOfMonth } from 'date-fns';

export function formatDate(date: Date): string {
  return format(date, 'MMM dd, yyyy HH:mm');
}

export function getDateRange(range: string): { start: Date; end: Date } {
  const now = new Date();
  const end = now;
  
  switch (range) {
    case 'today':
      return {
        start: startOfDay(now),
        end
      };
    case 'this_week':
      return {
        start: startOfWeek(now),
        end
      };
    case 'this_month':
      return {
        start: startOfMonth(now),
        end
      };
    default:
      return {
        start: startOfDay(now),
        end
      };
  }
}