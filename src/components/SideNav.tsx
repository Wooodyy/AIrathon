import { Home, Calendar, Briefcase, MessageCircle, User, ActivitySquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "../lib/utils";

export function SideNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Главная', path: '/home' },
    { icon: Calendar, label: 'Календарь', path: '/calendar' },
    { icon: Briefcase, label: 'Вакансии', path: '/jobs' },
    { icon: MessageCircle, label: 'Чат', path: '/support' },
    { icon: User, label: 'Профиль', path: '/profile' },
  ];

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="mb-8 flex items-center gap-3">
        <ActivitySquare className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold">Реабилитация</h1>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}