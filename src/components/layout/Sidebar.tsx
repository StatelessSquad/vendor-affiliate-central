
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Link as LinkIcon, 
  PieChart, 
  ShoppingBag, 
  Settings, 
  Store, 
  Users,
  LogOut,
} from "lucide-react";

type SidebarLink = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export const Sidebar = () => {
  const location = useLocation();
  
  const mainLinks: SidebarLink[] = [
    {
      title: "Dashboard",
      href: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Affiliate Links",
      href: "/affiliate-links",
      icon: <LinkIcon size={20} />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <PieChart size={20} />,
    },
    {
      title: "Products",
      href: "/products",
      icon: <ShoppingBag size={20} />,
    },
    {
      title: "Platforms",
      href: "/platforms",
      icon: <Store size={20} />,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <Users size={20} />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <aside className="hidden md:flex h-full w-64 flex-col border-r bg-white shadow-sm">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-md bg-brand-600 p-1">
            <LinkIcon className="h-6 w-6 text-white" />
          </div>
          <span className="text-lg font-medium">AffiliateHub</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActiveLink(link.href)
                  ? "bg-brand-50 text-brand-600"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t p-4">
        <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};
