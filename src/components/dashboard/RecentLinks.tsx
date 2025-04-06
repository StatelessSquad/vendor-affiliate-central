
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const recentLinks = [
  {
    id: 1,
    name: "Sony WH-1000XM4 Headphones",
    platform: "Amazon",
    url: "https://amazon.com/dp/B0863TXGM3/ref=affiliate123",
    createdAt: "2 hours ago",
    clicks: 42,
  },
  {
    id: 2,
    name: "Anker Powerbank 20000mAh",
    platform: "Alibaba",
    url: "https://alibaba.com/product/12345/ref=affiliate123",
    createdAt: "5 hours ago",
    clicks: 27,
  },
  {
    id: 3,
    name: "Samsung Galaxy Buds Pro",
    platform: "eBay",
    url: "https://ebay.com/itm/12345/ref=affiliate123",
    createdAt: "1 day ago",
    clicks: 36,
  },
  {
    id: 4,
    name: "Apple iPad Air",
    platform: "Amazon",
    url: "https://amazon.com/dp/B09V3HN1KC/ref=affiliate123",
    createdAt: "2 days ago",
    clicks: 89,
  },
];

export function RecentLinks() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Affiliate Links</CardTitle>
        <CardDescription>Your most recently created affiliate links</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLinks.map((link) => (
            <div
              key={link.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 rounded-lg border p-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{link.name}</h3>
                  <Badge variant="outline">{link.platform}</Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <p>Created {link.createdAt}</p>
                  <p>•</p>
                  <p>{link.clicks} clicks</p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span className="max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {link.url}
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
