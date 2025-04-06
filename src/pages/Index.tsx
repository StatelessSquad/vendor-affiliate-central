
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/stat-card";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { PlatformPerformance } from "@/components/dashboard/PlatformPerformance";
import { RecentLinks } from "@/components/dashboard/RecentLinks";
import { DollarSign, Link, MousePointer, ShoppingBag } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your affiliate performance across all platforms.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$12,546.20"
            description="vs. last month"
            trend={{ value: 12.5, isPositive: true }}
            icon={<DollarSign className="h-4 w-4" />}
          />
          <StatCard
            title="Affiliate Links"
            value="245"
            description="vs. last month"
            trend={{ value: 8.2, isPositive: true }}
            icon={<Link className="h-4 w-4" />}
          />
          <StatCard
            title="Total Clicks"
            value="18,297"
            description="vs. last month"
            trend={{ value: 3.1, isPositive: false }}
            icon={<MousePointer className="h-4 w-4" />}
          />
          <StatCard
            title="Active Products"
            value="134"
            description="vs. last month"
            trend={{ value: 7.4, isPositive: true }}
            icon={<ShoppingBag className="h-4 w-4" />}
          />
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <RevenueChart />
          <TopProducts />
          <PlatformPerformance />
          <RecentLinks />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
