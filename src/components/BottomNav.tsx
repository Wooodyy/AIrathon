import { Home as HomeIcon, Calendar, Briefcase, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "../lib/utils";

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: HomeIcon, label: 'Главная', path: '/home' },
    { icon: Calendar, label: 'Календарь', path: '/calendar' },
    { icon: Briefcase, label: 'Вакансии', path: '/jobs' },
    { icon: MessageCircle, label: 'Чат', path: '/support' },
    { icon: User, label: 'Профиль', path: '/profile' },
  ];

  // Don't show bottom nav on the survey form
  if (location.pathname === '/') return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 px-2 py-1">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center py-2 px-3 rounded-lg transition-colors",
                "hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}