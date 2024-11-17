import React from 'react';
import {
  User,
  Heart,
  Dumbbell,
  Brain,
  Users,
  Briefcase,
  Activity,
  Scale,
  Ruler,
  Goal,
  Clock,
  MessageCircle,
  Calendar,
  Briefcase as WorkIcon,
  GraduationCap
} from 'lucide-react';

const mockProfileData = {
  personal: {
    name: 'Анна Петрова',
    age: '28',
    gender: 'Женский',
    height: '168',
    weight: '62'
  },
  medical: {
    state: 4,
    limitationType: 'Ограничение подвижности правой руки',
    disabilityCause: 'Производственная травма',
    medications: 'Противовоспалительные препараты'
  },
  physical: {
    state: 3,
    equipment: 'Эспандер, гантели легкого веса',
    rehabGoals: 'Восстановление подвижности руки, укрепление мышц',
    activityTime: '45 минут в день'
  },
  psychological: {
    state: 5,
    conditions: ['Периодическая тревожность'],
    notes: 'Позитивный настрой на реабилитацию'
  },
  social: {
    state: 4,
    communicationIssues: false,
    eventsParticipation: true,
    needs: 'Расширение социальных контактов'
  },
  professional: {
    state: 4,
    skills: 'Графический дизайн, UI/UX проектирование', 
    experience: '5 лет в сфере дизайна'
  }
};

const StateIndicator = ({ value }: { value: number }) => {
  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-emerald-500'
  ];

  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= value ? colors[value - 1] : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

const ProfileSection = ({
  icon: Icon,
  title,
  state,
  children
}: {
  icon: React.ElementType;
  title: string;
  state?: number;
  children: React.ReactNode;
}) => (
  <div className="border border-border/50 rounded-xl p-4 sm:p-6 space-y-4">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {state && <StateIndicator value={state} />}
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

const InfoItem = ({
  icon: Icon,
  label,
  value
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
    <div className="flex items-center gap-2 text-muted-foreground">
      <Icon className="w-4 h-4 shrink-0" />
      <span>{label}:</span>
    </div>
    <span className="font-medium">{value}</span>
  </div>
);

export function Profile() {
  return (
    <div className="min-h-screen px-4 py-6 sm:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Профиль</h1>
          <div className="px-4 py-2 bg-primary/10 rounded-full self-start">
            <span className="text-primary font-medium">ID: 2024-0831</span>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <ProfileSection icon={User} title="Личная информация">
            <div className="grid gap-4">
              <InfoItem icon={User} label="ФИО" value={mockProfileData.personal.name} />
              <InfoItem icon={Calendar} label="Возраст" value={`${mockProfileData.personal.age} лет`} />
              <InfoItem icon={Ruler} label="Рост" value={`${mockProfileData.personal.height} см`} />
              <InfoItem icon={Scale} label="Вес" value={`${mockProfileData.personal.weight} кг`} />
            </div>
          </ProfileSection>

          <ProfileSection
            icon={Heart}
            title="Медицинская реабилитация"
            state={mockProfileData.medical.state}
          >
            <div className="space-y-4">
              <InfoItem
                icon={Activity}
                label="Тип ограничения"
                value={mockProfileData.medical.limitationType}
              />
            </div>
          </ProfileSection>

          <ProfileSection
            icon={Dumbbell}
            title="Физическая реабилитация"
            state={mockProfileData.physical.state}
          >
            <div className="space-y-4">
              <InfoItem
                icon={Goal}
                label="Цели"
                value={mockProfileData.physical.rehabGoals}
              />
              <InfoItem
                icon={Clock}
                label="Время занятий"
                value={mockProfileData.physical.activityTime}
              />
            </div>
          </ProfileSection>

          <ProfileSection
            icon={Brain}
            title="Психологическая реабилитация"
            state={mockProfileData.psychological.state}
          >
            <div className="space-y-4">
              <InfoItem
                icon={MessageCircle}
                label="Заметки"
                value={mockProfileData.psychological.notes}
              />
            </div>
          </ProfileSection>

          <ProfileSection
            icon={Users}
            title="Социальная реабилитация"
            state={mockProfileData.social.state}
          >
            <div className="space-y-4">
              <InfoItem
                icon={Users}
                label="Социальные потребности"
                value={mockProfileData.social.needs}
              />
            </div>
          </ProfileSection>

          <ProfileSection
            icon={Briefcase}
            title="Профессиональная реабилитация"
            state={mockProfileData.professional.state}
          >
            <div className="space-y-4">
              <InfoItem
                icon={GraduationCap}
                label="Навыки"
                value={mockProfileData.professional.skills}
              />
              <InfoItem
                icon={WorkIcon}
                label="Опыт"
                value={mockProfileData.professional.experience}
              />
            </div>
          </ProfileSection>
        </div>
      </div>
    </div>
  );
}