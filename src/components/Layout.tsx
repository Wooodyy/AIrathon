import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { SideNav } from './SideNav';
import { ModeToggle } from './mode-toggle';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isFormPage = location.pathname === '/';

  if (isFormPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background/95">
      {/* Desktop Side Navigation */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 border-r border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SideNav />
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 min-h-screen pb-16 lg:pb-8">
        <div className="max-w-[1000px] mx-auto p-4 lg:p-6">
          <div className="flex justify-end mb-6">
            <ModeToggle />
          </div>
          <div className="bg-card rounded-xl shadow-lg border border-border/50 p-6">
            {children}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}