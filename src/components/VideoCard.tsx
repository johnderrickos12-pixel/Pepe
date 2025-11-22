import { PlayCircle, Clock, Eye } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  duration: string;
  title: string;
  author: string;
  views: string;
  isNew?: boolean;
  isHD?: boolean;
}

export function VideoCard({ thumbnail, duration, title, author, views, isNew = false, isHD = false }: VideoCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative cursor-pointer overflow-hidden bg-black">
        <img src={thumbnail} alt={title} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out" />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-16 h-16 text-white text-opacity-80" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <div className="pt-2">
        <h3 className="text-white font-bold text-sm truncate group-hover:text-ph-orange transition-colors duration-200">
          {title}
        </h3>
        <div className="flex items-center text-gray-400 text-xs mt-1">
          <span>{author}</span>
        </div>
        <div className="flex items-center text-gray-400 text-xs mt-1 space-x-2">
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{views}</span>
          </div>
          {isNew && <span className="text-green-400 font-semibold">NEW</span>}
          {isHD && <span className="bg-ph-orange text-black text-xs font-bold px-1 rounded-sm">HD</span>}
        </div>
      </div>
    </div>
  );
}