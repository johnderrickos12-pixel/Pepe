import { Search, Upload, Menu, MessageSquare, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="md:hidden">
          <Menu size={24} />
        </button>
        <div className="text-2xl font-bold">
          <span className="bg-orange-500 px-2 py-1 rounded">Pornhub</span>
        </div>
      </div>
      <div className="hidden md:flex flex-1 mx-4 max-w-2xl">
        <div className="w-full bg-gray-800 rounded-full flex items-center px-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
          />
          <Search className="text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center space-x-2">
          <Upload size={24} />
          <span>Upload</span>
        </button>
        <button>
          <MessageSquare size={24} />
        </button>
        <button>
          <Bell size={24} />
        </button>
        <button>
          <User size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
