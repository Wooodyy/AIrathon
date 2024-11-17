import React from 'react';
import { JobCard } from '../components/JobCard';

const mockJobs = [
  {
    id: 1,
    title: 'Графический дизайнер',
    company: 'ООО "Креатив"',
    salary: '50 000 - 80 000 ₽',
    location: 'Москва',
    url: 'https://hh.ru/vacancy/123456'
  },
  {
    id: 2,
    title: 'Web-разработчик',
    company: 'IT Solutions',
    salary: '120 000 - 180 000 ₽',
    location: 'Санкт-Петербург',
    url: 'https://hh.ru/vacancy/789012'
  },
  {
    id: 3,
    title: 'Менеджер проектов',
    company: 'Инновации Плюс',
    salary: '90 000 - 130 000 ₽',
    location: 'Казань',
    url: 'https://hh.ru/vacancy/345678'
  }
];

export function Jobs() {
  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Вакансии</h1>
          <p className="text-muted-foreground">
            Доступные вакансии для соискателей с разным опытом работы
          </p>
        </div>

        <div className="space-y-4">
          {mockJobs.map(job => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              salary={job.salary}
              location={job.location}
              url={job.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}