import React from 'react';
import { MapPin, Building2, Banknote } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  salary: string;
  location: string;
  url: string;
}

export function JobCard({ title, company, salary, location, url }: JobCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-card">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="w-4 h-4" />
          <span>{company}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Banknote className="w-4 h-4" />
          <span>{salary}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors text-sm"
      >
        Подробнее
      </a>
    </div>
  );
}