
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Wireless Earbuds", value: 4000, color: "#3182CE" },
  { name: "Smart Watch", value: 3000, color: "#F59E0B" },
  { name: "Laptop Stand", value: 2000, color: "#10B981" },
  { name: "Phone Case", value: 1500, color: "#8B5CF6" },
  { name: "Others", value: 1000, color: "#EC4899" },
];

export function TopProducts() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>
          Products generating the most revenue
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
