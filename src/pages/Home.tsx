import { ActivitySquare } from 'lucide-react';

export function Home() {
  const blocks = [
    {
      title: "Блок информации 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Блок информации 2",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Блок информации 3",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      title: "Блок информации 4",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Блок информации 5",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }
  ];

  return (
    <div className="space-y-6 p-4 lg:p-4">
      <div className="space-y-4"><div className="flex items-center gap-3">
            <ActivitySquare className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">
              Советы по реабилитации
            </h2>
          </div>
      </div>
      
      <div className="p-0 space-y-6">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="form-card p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.7)]"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {block.title}
                </h3>
                <p className="text-muted-foreground">
                  {block.content}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}