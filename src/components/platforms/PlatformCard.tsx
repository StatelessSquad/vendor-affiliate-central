
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  name: string;
  logo: React.ReactNode;
  status: "connected" | "not_connected";
  products: number;
  primaryColor: string;
  onConnect: () => void;
  onManage: () => void;
}

export function PlatformCard({
  name,
  logo,
  status,
  products,
  primaryColor,
  onConnect,
  onManage,
}: PlatformCardProps) {
  return (
    <Card className="overflow-hidden">
      <div 
        className="h-2" 
        style={{ backgroundColor: primaryColor }}
      />
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {logo}
            <CardTitle>{name}</CardTitle>
          </div>
          <Badge
            variant={status === "connected" ? "default" : "outline"}
            className={cn(
              status === "connected" && "bg-green-500 hover:bg-green-500"
            )}
          >
            {status === "connected" ? "Connected" : "Not Connected"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground">
          {status === "connected"
            ? `${products} products connected`
            : "Connect to manage affiliate products"}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        {status === "connected" ? (
          <Button onClick={onManage} variant="outline" className="w-full">
            Manage
          </Button>
        ) : (
          <Button onClick={onConnect} className="w-full" style={{ backgroundColor: primaryColor }}>
            Connect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
