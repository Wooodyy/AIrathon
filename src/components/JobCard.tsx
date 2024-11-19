
interface JobCardProps {
  title: string;
  company: string;
  salary: string;
  location: string;
  url: string;
}

export function JobCard({ title, company, salary, location, url }: JobCardProps) {
  return (
    <div className="w-full border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Зарплата</p>
            <p className="text-muted-foreground">{salary}</p>
          </div>
          <div className="space-y-1 grid justify-items-end">
            <p className="text-sm font-medium">Локация</p>
            <p className="text-muted-foreground">{location}</p>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
        >
          Подробнее
        </a>
      </div>
    </div>
  );
}