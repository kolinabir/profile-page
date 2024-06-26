import React, { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    name: "Page A",
    year: 2021,
    rating: Math.floor(Math.random() * 1001) + 100,
    campaignRating: Math.floor(Math.random() * 1001) + 50,
  },
  {
    name: "Page B",
    year: 2021,
    rating: Math.floor(Math.random() * 1001) + 100,
    campaignRating: Math.floor(Math.random() * 1001) + 100,
  },
  {
    name: "Page C",
    year: 2021,
    rating: Math.floor(Math.random() * 1001) + 100,
    campaignRating: Math.floor(Math.random() * 1001) + 100,
  },
  {
    name: "Page D",
    year: 2021,
    rating: Math.floor(Math.random() * 1001) + 100,
    campaignRating: Math.floor(Math.random() * 1001) + 100,
  },
  {
    name: "Page E",
    year: 2021,
    rating: Math.floor(Math.random() * 1001) + 100,
    campaignRating: Math.floor(Math.random() * 1001) + 100,
  },
  {
    name: "Page F",
    year: 2021,
    rating: Math.floor(Math.random() * 1001) + 100,
    campaignRating: Math.floor(Math.random() * 1001) + 100,
  },
  {
    name: "Page G",
    year: 2021,
    rating: Math.floor(Math.random() * 1001) + 100,
    campaignRating: Math.floor(Math.random() * 1001) + 100,
  },
];

const performanceData = [
  { label: "Contest Rating", value: 1500 },
  { label: "Attended Contests", value: 10 },
  { label: "Global Rank", value: "1500/10000" },
  { label: "Level", value: 5, isBadge: true },
  { label: "Campaign Rating", value: 7.5 },
];

const LineChartRating: React.FC = () => {
  const [isRating, setIsRating] = React.useState(true);
  return (
    <div className="w-full h-80 bg-white p-4">
      <div className="text-lg font-semibold mb-1">Contest Performance</div>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {performanceData.map(({ label, value, isBadge }) => (
          <div key={label} className="flex flex-col">
            <p className="text-xs text-gray-500">{label}</p>
            {isBadge ? (
              <Badge variant="secondary" className="text-xs mt-1 w-fit">
                <span className="text-blue-500">{value}</span>
              </Badge>
            ) : (
              <p className="text-sm font-semibold mt-1">
                <span className="text-blue-500">{value}</span>
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="w-full mb-2">
        <Tabs defaultValue="rating" className="w-full">
          <TabsList className="w-full flex justify-between">
            <TabsTrigger
              className="mx-auto w-full text-center"
              onClick={() => setIsRating(true)}
              value="rating"
            >
              Rating
            </TabsTrigger>
            <TabsTrigger
              className="mx-auto w-full text-center"
              onClick={() => setIsRating(false)}
              value="CampaignRating"
            >
              Campaign Rating
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <ResponsiveContainer className="" width="100%" height="60%">
        <LineChart
          data={data}
          margin={{ left: -20, right: 20, top: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="6 6"
            vertical={false}
            stroke="#767474"
          />
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            domain={[0, "dataMax + 1"]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={isRating ? "rating" : "campaignRating"}
            stroke="#4CAF50"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
            animationDuration={300}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartRating;
