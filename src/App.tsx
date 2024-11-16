import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PersonalInfo } from './components/RehabForm/PersonalInfo';
import { MedicalRehab } from './components/RehabForm/MedicalRehab';
import { PhysicalRehab } from './components/RehabForm/PhysicalRehab';
import { PsychologicalRehab } from './components/RehabForm/PsychologicalRehab';
import { SocialRehab } from './components/RehabForm/SocialRehab';
import { ProfessionalRehab } from './components/RehabForm/ProfessionalRehab';
import { 
  ActivitySquare, 
  User, 
  Heart, 
  Dumbbell, 
  Brain, 
  Users, 
  Briefcase,
  Menu,
  X
} from 'lucide-react';
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

function App() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    
    // Medical Rehab
    medicalState: 3,
    limitationType: '',
    disabilityCause: '',
    medications: '',
    
    // Physical Rehab
    physicalState: 3,
    equipment: '',
    rehabGoals: '',
    activityTime: '',
    
    // Psychological Rehab
    psychologicalState: 3,
    hasAnxiety: false,
    hasDepression: false,
    hasStress: false,
    psychologicalNotes: '',
    
    // Social Rehab
    socialState: 3,
    hasCommunicationIssues: false,
    participatesInEvents: false,
    socialNeeds: '',
    
    // Professional Rehab
    professionalState: 3,
    skills: '',
    experience: ''
  });

  const tabs = [
    { id: 'personal', icon: User, label: 'Личная информация', component: PersonalInfo },
    { id: 'medical', icon: Heart, label: 'Медицинская реабилитация', component: MedicalRehab },
    { id: 'physical', icon: Dumbbell, label: 'Физическая реабилитация', component: PhysicalRehab },
    { id: 'psychological', icon: Brain, label: 'Психологическая реабилитация', component: PsychologicalRehab },
    { id: 'social', icon: Users, label: 'Социальная реабилитация', component: SocialRehab },
    { id: 'professional', icon: Briefcase, label: 'Профессиональная реабилитация', component: ProfessionalRehab }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Close sidebar on mobile after tab selection
    setIsSidebarOpen(false);
  };

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
  const activeTabLabel = tabs.find(tab => tab.id === activeTab)?.label;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background/95 transition-colors duration-300">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border/50 bg-card/50 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-accent rounded-lg"
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <h2 className="font-semibold">{activeTabLabel}</h2>
          </div>
          <ModeToggle />
        </div>

        <div className="p-4 lg:p-6">
          {/* Desktop Header */}
          <div className="hidden lg:flex justify-end mb-6">
            <ModeToggle />
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-[1000px] mx-auto space-y-6">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border/50">
              <div className="flex relative">
                {/* Sidebar - Mobile Overlay */}
                <div
                  className={cn(
                    "lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-200",
                    isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                />

                {/* Sidebar */}
                <div
                  className={cn(
                    "min-w-[280px] lg:min-w-fit border-r border-border/50 bg-card",
                    "fixed lg:static top-[65px] bottom-0 left-0 z-40",
                    "transition-transform duration-200 lg:transform-none",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  )}
                >
                  <div className="p-5 border-b border-border/50 hidden lg:block">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <ActivitySquare className="h-6 w-6 text-primary" />
                      <div>
                        <h1 className="text-lg font-semibold text-foreground">
                          Реабилитация
                        </h1>
                      </div>
                    </div>
                  </div>
                  <nav className="p-3">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors mb-2 text-left whitespace-nowrap",
                          "hover:bg-accent hover:text-accent-foreground",
                          activeTab === tab.id ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        )}
                      >
                        <tab.icon className="h-5 w-5 shrink-0" />
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-5 w-full">
                  {ActiveComponent && (
                    <ActiveComponent formData={formData} setFormData={setFormData} />
                  )}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Отправить форму
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;