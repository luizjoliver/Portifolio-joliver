import { techIconsMap } from '@/constants/stack';

export default function StackItem({ tech }: { tech: string }) {
  const Icon = techIconsMap.get(tech);

  return (
    <li className="relative group text-white flex flex-col items-center">
      <div className="h-full w-full flex flex-col items-center justify-center p-2">
        <div className="flex flex-col items-center">
          {Icon}
          <span className='
            text-xs md:text-sm whitespace-nowrap md:mt-2
            opacity-100 md:opacity-0 md:group-hover:opacity-100 
            transition-opacity duration-200
          '>
            {tech}
          </span>
        </div>
      </div>
    </li>
  );
}