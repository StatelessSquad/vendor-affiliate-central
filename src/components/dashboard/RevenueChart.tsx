
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", amazon: 400, alibaba: 240, others: 320 },
  { month: "Feb", amazon: 300, alibaba: 280, others: 410 },
  { month: "Mar", amazon: 600, alibaba: 320, others: 320 },
  { month: "Apr", amazon: 400, alibaba: 300, others: 490 },
  { month: "May", amazon: 700, alibaba: 420, others: 380 },
  { month: "Jun", amazon: 500, alibaba: 380, others: 430 },
  { month: "Jul", amazon: 800, alibaba: 450, others: 520 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>
          Compare revenue across platforms over time
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amazon"
              stackId="1"
              stroke="#3182CE"
              fill="#3182CE"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="alibaba"
              stackId="1"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="others"
              stackId="1"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
