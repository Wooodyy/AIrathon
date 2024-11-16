import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PersonalInfo } from './components/RehabForm/PersonalInfo';
import { MedicalRehab } from './components/RehabForm/MedicalRehab';
import { PhysicalRehab } from './components/RehabForm/PhysicalRehab';
import { PsychologicalRehab } from './components/RehabForm/PsychologicalRehab';
import { SocialRehab } from './components/RehabForm/SocialRehab';
import { ProfessionalRehab } from './components/RehabForm/ProfessionalRehab';
import { ActivitySquare } from 'lucide-react';
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <ActivitySquare className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    Форма оценки реабилитации
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Пожалуйста, заполните форму для оценки вашего состояния
                  </p>
                </div>
              </div>
              <ModeToggle />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <PersonalInfo formData={formData} setFormData={setFormData} />
              <MedicalRehab formData={formData} setFormData={setFormData} />
              <PhysicalRehab formData={formData} setFormData={setFormData} />
              <PsychologicalRehab formData={formData} setFormData={setFormData} />
              <SocialRehab formData={formData} setFormData={setFormData} />
              <ProfessionalRehab formData={formData} setFormData={setFormData} />

              <div className="sticky bottom-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Отправить форму
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;