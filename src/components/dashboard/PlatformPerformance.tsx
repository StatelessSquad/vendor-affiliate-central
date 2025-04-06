
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Amazon",
    clicks: 4000,
    conversions: 240,
  },
  {
    name: "Alibaba",
    clicks: 3000,
    conversions: 140,
  },
  {
    name: "eBay",
    clicks: 2000,
    conversions: 90,
  },
  {
    name: "Walmart",
    clicks: 1500,
    conversions: 48,
  },
  {
    name: "AliExpress",
    clicks: 1000,
    conversions: 38,
  },
];

export function PlatformPerformance() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Platform Performance</CardTitle>
        <CardDescription>
          Compare clicks and conversions by platform
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#3182CE" />
            <YAxis yAxisId="right" orientation="right" stroke="#F59E0B" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="clicks" fill="#3182CE" name="Clicks" />
            <Bar yAxisId="right" dataKey="conversions" fill="#F59E0B" name="Conversions" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
