import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 
        ${isBot ? 'bg-primary/10' : 'bg-secondary/10'}`}>
        {isBot ? <Bot className="w-5 h-5 text-primary" /> : <User className="w-5 h-5 text-secondary" />}
      </div>
      <div className={`flex flex-col max-w-[80%] ${isBot ? '' : 'items-end'}`}>
        <div className={`rounded-2xl px-4 py-2 ${
          isBot ? 'bg-primary/10 rounded-tl-sm' : 'bg-secondary/10 rounded-tr-sm'
        }`}>
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1">{timestamp}</span>
      </div>
    </div>
  );
}