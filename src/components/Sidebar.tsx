import {
  Flame,
  Clapperboard,
  History,
  PlaySquare,
  Users,
  Star,
  PlusSquare,
  Heart,
  User,
  Settings,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-gray-300 p-4 hidden lg:block flex-shrink-0">
      <nav>
        <SidebarSection title="MENU">
          <SidebarItem icon={<Flame className="w-5 h-5 text-orange-500" />} text="Hottest" />
          <SidebarItem icon={<Clapperboard className="w-5 h-5 text-orange-500" />} text="Videos" active />
          <SidebarItem icon={<Star className="w-5 h-5 text-orange-500" />} text="Pornstars" />
          <SidebarItem icon={<Users className="w-5 h-5 text-orange-500" />} text="Community" />
        </SidebarSection>
        
        <SidebarSection title="MY ACCOUNT">
          <SidebarItem icon={<History className="w-5 h-5" />} text="Watch History" />
          <SidebarItem icon={<PlaySquare className="w-5 h-5" />} text="My Playlists" />
          <SidebarItem icon={<Heart className="w-5 h-5" />} text="My Favorite Videos" />
          <SidebarItem icon={<PlusSquare className="w-5 h-5" />} text="My Content" />
          <SidebarItem icon={<User className="w-5 h-5" />} text="Account Details" />
        </SidebarSection>

        <SidebarSection title="MORE">
            <SidebarItem icon={<Settings className="w-5 h-5" />} text="Settings" />
            <SidebarItem icon={<HelpCircle className="w-5 h-5" />} text="Help & Support" />
        </SidebarSection>
      </nav>
    </aside>
  );
};

const SidebarSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-sm font-bold text-gray-500 px-3 mb-2 uppercase tracking-wider">{title}</h3>
    <ul>{children}</ul>
  </div>
);

const SidebarItem = ({ icon, text, active = false }: { icon: React.ReactNode, text: string, active?: boolean }) => (
  <li>
    <a
      href="#"
      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "bg-gray-800 text-white"
          : "hover:bg-gray-800/80 hover:text-white"
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  </li>
);

export default Sidebar;