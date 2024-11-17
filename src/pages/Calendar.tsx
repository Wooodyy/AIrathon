import React from 'react';

export function Calendar() {
  return (
    <div className="min-h-screen bg-background/95 p-6 pb-20">
      <h1 className="text-2xl font-bold text-foreground mb-6">Календарь</h1>
      <div className="bg-card rounded-lg p-4 shadow-lg border border-border/50">
        <p className="text-muted-foreground">Здесь будет ваш календарь мероприятий</p>
      </div>
    </div>
  );
}