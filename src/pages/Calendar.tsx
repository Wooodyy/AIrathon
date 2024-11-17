import React from 'react';
import { Pill, Dumbbell, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type RecommendationType = 'medicine' | 'exercise' | 'activity';

interface Recommendation {
  type: RecommendationType;
  title: string;
  time: string;
  name: string;
  description: string;
}

type TypeStyle = {
  bg: string;
  text: string;
  border: string;
  icon: LucideIcon;
}

type TypeStyles = Record<RecommendationType, TypeStyle>;

const weekDays = [
  { full: 'Понедельник', short: 'Пн' },
  { full: 'Вторник', short: 'Вт' },
  { full: 'Среда', short: 'Ср' },
  { full: 'Четверг', short: 'Чт' },
  { full: 'Пятница', short: 'Пт' },
  { full: 'Суббота', short: 'Сб' },
  { full: 'Воскресенье', short: 'Вс' }
] as const;

const weeklyRecommendations: Record<number, Recommendation[]> = {
  0: [ // Понедельник
    {
      type: 'medicine',
      title: 'Прием лекарств',
      time: '09:00 - 09:30',
      name: 'Противовоспалительные препараты',
      description: 'Принять после завтрака'
    },
    {
      type: 'exercise',
      title: 'Физ. упражнение',
      time: '11:00 - 11:30',
      name: 'Упражнения для спины',
      description: 'Комплекс упражнений для укрепления мышц спины'
    }
  ],
  1: [ // Вторник
    {
      type: 'medicine',
      title: 'Прием лекарств',
      time: '09:00 - 09:30',
      name: 'Витамины группы B',
      description: 'Принять во время завтрака'
    },
    {
      type: 'activity',
      title: 'Активность',
      time: '16:00 - 16:45',
      name: 'Прогулка',
      description: 'Легкая прогулка на свежем воздухе'
    }
  ],
  2: [ // Среда
    {
      type: 'exercise',
      title: 'Физ. упражнение',
      time: '10:00 - 10:40',
      name: 'Растяжка',
      description: 'Комплекс упражнений на растяжку'
    },
    {
      type: 'medicine',
      title: 'Прием лекарств',
      time: '14:00 - 14:30',
      name: 'Обезболивающие',
      description: 'Принять после обеда при необходимости'
    }
  ],
  3: [ // Четверг
    {
      type: 'activity',
      title: 'Активность',
      time: '11:00 - 11:45',
      name: 'Бассейн',
      description: 'Плавание в бассейне'
    },
    {
      type: 'medicine',
      title: 'Прием лекарств',
      time: '19:00 - 19:30',
      name: 'Витамин D',
      description: 'Принять перед сном'
    }
  ],
  4: [ // Пятница
    {
      type: 'exercise',
      title: 'Физ. упражнение',
      time: '09:00 - 09:45',
      name: 'ЛФК',
      description: 'Комплекс лечебной физкультуры'
    },
    {
      type: 'activity',
      title: 'Активность',
      time: '15:00 - 15:45',
      name: 'Эрготерапия',
      description: 'Занятие с эрготерапевтом'
    }
  ],
  5: [ // Суббота
    {
      type: 'activity',
      title: 'Активность',
      time: '10:00 - 10:45',
      name: 'Групповое занятие',
      description: 'Групповое занятие по ЛФК'
    }
  ],
  6: [ // Воскресенье
    {
      type: 'medicine',
      title: 'Прием лекарств',
      time: '10:00 - 10:30',
      name: 'Витаминный комплекс',
      description: 'Принять во время завтрака'
    }
  ]
};

const typeStyles: TypeStyles = {
  medicine: {
    bg: 'bg-coral-100',
    text: 'text-coral-700',
    border: 'border-coral-200',
    icon: Pill
  },
  exercise: {
    bg: 'bg-teal-100',
    text: 'text-teal-700',
    border: 'border-teal-200',
    icon: Dumbbell
  },
  activity: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-200',
    icon: Activity
  }
} as const;

export function Calendar() {
  const [selectedDay, setSelectedDay] = React.useState(1);

  return (
    <div className="min-h-screen px-4 py-6 sm:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Календарь</h1>
        
        {/* Week Navigation */}
        <div className="flex overflow-x-auto gap-2 pb-2">
          {weekDays.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-lg transition-colors 
                ${selectedDay === index 
                  ? 'bg-primary text-white-foreground shadow-md ' 
                  : 'bg-card hover:bg-accent сolor-#FFF'}
                border border-border/100
              `}
            >
              <span className="hidden sm:inline ">{day.full}</span>
              <span className="sm:hidden">{day.short}</span>
            </button>
          ))}
        </div>

        {/* Recommendations Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold ">
            План рекомендации на {weekDays[selectedDay].full.toUpperCase()}
          </h2>
          
          <div className="space-y-4">
            {weeklyRecommendations[selectedDay].map((recommendation, index) => {
              const style = typeStyles[recommendation.type];
              const Icon = style.icon;

              return (
                <div 
                  key={index}
                  className="border border-border/50 rounded-xl p-4 space-y-3"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${style.bg} ${style.text} ${style.border} border`}>
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{recommendation.title}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Время: {recommendation.time}
                      </p>
                      <p className="font-medium">{recommendation.name}</p>
                      <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}