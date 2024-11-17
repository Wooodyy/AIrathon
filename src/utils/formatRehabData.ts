interface RehabFormData {
    name: string;
    age: string;
    gender: string;
    height: string;
    weight: string;
    medicalState: number;
    limitationType: string;
    disabilityCause: string;
    medications: string;
    physicalState: number;
    equipment: string;
    rehabGoals: string;
    activityTime: string;
    psychologicalState: number;
    hasAnxiety: boolean;
    hasDepression: boolean;
    hasStress: boolean;
    psychologicalNotes: string;
    socialState: number;
    hasCommunicationIssues: boolean;
    participatesInEvents: boolean;
    socialNeeds: string;
    professionalState: number;
    skills: string;
    experience: string;
  }
  
  export function formatRehabData(formData: RehabFormData) {
    return {
      personalInfo: {
        chapterName: "Личная информация",
        name_description: "Имя",
        name: formData.name,
        age_description: "Возраст",
        age: formData.age,
        gender_description: "Пол",
        gender: formData.gender,
        physicalParameters_description: "Рост(см) и Вес(кг)",
        physicalParameters: {
          height: formData.height,
          weight: formData.weight
        }
      },
      medicalRehab: {
        chapterName: "Медицинская реабилитация",
        overallState_description: "Оценка текущего состояния",
        overallState: formData.medicalState,
        limitationType_description: "Тип ограничения",
        limitationType: formData.limitationType,
        disabilityCause_description: "Причина инвалидности",
        disabilityCause: formData.disabilityCause,
        medications_description: "Принимаемые лекарства",
        medications: formData.medications
      },
      physicalRehab: {
        chapterName: "Физическая реабилитация",
        overallState_description: "Оценка физической формы (0-10)",
        overallState: formData.physicalState,
        equipment_description: "Используемое оборудование",
        equipment: formData.equipment,
        goals_description: "Цели реабилитации",
        goals: formData.rehabGoals,
        activityTime_description: "Время на физическую активность (минут в день)",
        activityTime: formData.activityTime
      },
      psychologicalRehab: {
        chapterName: "Психологическая реабилитация",
        overallState_description: "Оценка психологического состояния (0-10)",
        overallState: formData.psychologicalState,
        mentalHealth_description: "Отметьте, что вы испытываете:1-Тревожность 2-Депрессия 3-Стресс",
        mentalHealth: {
          hasAnxiety: formData.hasAnxiety,
          hasDepression: formData.hasDepression,
          hasStress: formData.hasStress
        },
        additionalNotes_description: "Дополнительные комментарии",
        additionalNotes: formData.psychologicalNotes
      },
      socialRehab: {
        chapterName: "Социальная реабилитация",
        overallState_description: "Оценка социальной включенности (0-10)",
        overallState: formData.socialState,
        mentalHealth_description: "Отметьте подходящее:1-Испытываю трудности в общении 2-Участвую в социальных мероприятиях",
        socialIssues: {
          hasCommunicationProblems: formData.hasCommunicationIssues,
          participatesInSocialEvents: formData.participatesInEvents
        },
        needs_description: "Потребности в социальной адаптации",
        needs: formData.socialNeeds
      },
      professionalRehab: {
        chapterName: "Профессиональная реабилитация",
        overallState_description: "Удовлетворенность профессиональной ситуацией (0-10)",
        overallState: formData.professionalState,
        skills_description: "Навыки и умения",
        skills: formData.skills,
        workExperience_description: "Опыт работы и увлечения",
        workExperience: formData.experience
      }
    };
  }