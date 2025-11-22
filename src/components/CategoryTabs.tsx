import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  "Recommended", "Trending", "Pornstars", "Categories", "Live Cams", 
  "Community", "Photos & Gifs", "Discover", "For Women"
];

const CategoryTabs = () => {
  return (
    <div className="bg-neutral-900 border-b border-neutral-800">
      <div className="relative container mx-auto px-4">
        <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-2">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className={`py-2 px-2 text-sm font-bold whitespace-nowrap
                ${index === 0 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-neutral-400 hover:text-white transition-colors'
                }`}
            >
              {category.toUpperCase()}
            </a>
          ))}
        </div>
        <div className="absolute top-0 right-4 h-full flex items-center bg-gradient-to-l from-neutral-900 via-neutral-900/80 to-transparent pl-8 pointer-events-none">
           <button className="bg-neutral-800/80 backdrop-blur-sm rounded-full p-1 text-white hover:bg-neutral-700 pointer-events-auto">
             <ChevronRight size={20} />
           </button>
        </div>
         <div className="absolute top-0 left-4 h-full flex items-center bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent pr-8 pointer-events-none">
           <button className="bg-neutral-800/80 backdrop-blur-sm rounded-full p-1 text-white hover:bg-neutral-700 pointer-events-auto">
             <ChevronLeft size={20} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
