
import React from "react";
import { Sidebar } from "./Sidebar";
import { Toaster } from "sonner";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {children}
      </main>
      <Toaster position="top-right" />
    </div>
  );
};
