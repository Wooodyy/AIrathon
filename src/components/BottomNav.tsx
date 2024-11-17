import { Home, Calendar, Briefcase, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "../lib/utils";

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: Briefcase, label: 'Вакансии', path: '/jobs' },
    { icon: Calendar, label: 'Календарь', path: '/calendar' },
    { icon: Home, label: 'Главная', path: '/home' },
    { icon: MessageCircle, label: 'Чат', path: '/support' },
    { icon: User, label: 'Профиль', path: '/profile' },
  ];

  if (location.pathname === '/') return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 lg:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1",
                "transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}