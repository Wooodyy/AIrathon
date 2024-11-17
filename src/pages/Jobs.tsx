
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
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-5xl mx-100% space-y-8 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Вакансии</h1>
          <p className="text-lg text-muted-foreground">
            Доступные вакансии для вас с вашими навыками и опытом работы
          </p>
        </div>

        <div className="grid gap-4">
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