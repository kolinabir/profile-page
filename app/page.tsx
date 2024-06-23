"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import Charts from "./[components]/Charts";

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:mx-36 mt-5">
      <Card className="lg:w-1/4">
        <CardContent className="flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-2 mt-2">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">knkolin9</h2>
          <p className="text-gray-500">Rank 2,897,052</p>
          <Button className="mt-4" variant="outline">
            Edit Profile
          </Button>
        </CardContent>
        <CardContent>
          <h3 className="text-lg font-bold">Community Stats</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between">
              <span>Views</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>Solution</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>Discuss</span>
              <span>0</span>
            </li>
            <li className="flex justify-between">
              <span>Reputation</span>
              <span>0</span>
            </li>
          </ul>
          <h3 className="mt-4 text-lg font-bold">Languages</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between">
              <Badge>JavaScript</Badge>
              <span>10 problems solved</span>
            </li>
            <li className="flex justify-between">
              <Badge>C++</Badge>
              <span>5 problems solved</span>
            </li>
          </ul>
          <h3 className="mt-4 text-lg font-bold">Skills</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Badge variant="secondary">Advanced</Badge>
            </li>
            <li>
              <Badge variant="secondary">Dynamic Programming</Badge>
            </li>
          </ul>
        </CardContent>
      </Card>
      <div className="flex-1 space-y-4">
        <Card className="">
          <CardContent
            className=" flex justify-between  md:flex-none 
           gap-4"
          >
            <Charts></Charts>
            <Charts></Charts>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-bold">
              25 submissions in the past one year
            </h3>
            {/* <HeatmapChart className="w-full aspect-[4/1]" /> */}
          </CardContent>
        </Card>
        <Card>
          <Tabs defaultValue="recent">
            <TabsList>
              <TabsTrigger value="recent">Recent AC</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
              <TabsTrigger value="discuss">Discuss</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Divisor Game</span>
                  <span className="text-gray-500">8 months ago</span>
                </li>
                <li className="flex justify-between">
                  <span>Min Cost Climbing Stairs</span>
                  <span className="text-gray-500">8 months ago</span>
                </li>
                <li className="flex justify-between">
                  <span>Peak Index in a Mountain Array</span>
                  <span className="text-gray-500">8 months ago</span>
                </li>
                <li className="flex justify-between">
                  <span>Sqrt(x)</span>
                  <span className="text-gray-500">8 months ago</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

function HeatmapChart(props) {
  return (
    <div {...props}>
      <ResponsiveHeatMap
        data={[
          {
            id: "A",
            data: [
              {
                x: "1",
                y: 4415,
              },
              {
                x: "2",
                y: -59456,
              },
              {
                x: "3",
                y: -79886,
              },
              {
                x: "4",
                y: 14478,
              },
              {
                x: "5",
                y: -63874,
              },
              {
                x: "6",
                y: -47542,
              },
              {
                x: "7",
                y: 16635,
              },
              {
                x: "8",
                y: -30278,
              },
              {
                x: "9",
                y: -95178,
              },
            ],
          },
          {
            id: "B",
            data: [
              {
                x: "1",
                y: 41241,
              },
              {
                x: "2",
                y: -77516,
              },
              {
                x: "3",
                y: -19422,
              },
              {
                x: "4",
                y: 61220,
              },
              {
                x: "5",
                y: -65044,
              },
              {
                x: "6",
                y: -59254,
              },
              {
                x: "7",
                y: 9299,
              },
              {
                x: "8",
                y: -58470,
              },
              {
                x: "9",
                y: 51828,
              },
            ],
          },
          {
            id: "C",
            data: [
              {
                x: "1",
                y: 94426,
              },
              {
                x: "2",
                y: 31248,
              },
              {
                x: "3",
                y: -15766,
              },
              {
                x: "4",
                y: 22271,
              },
              {
                x: "5",
                y: 86246,
              },
              {
                x: "6",
                y: -23717,
              },
              {
                x: "7",
                y: 97595,
              },
              {
                x: "8",
                y: -69800,
              },
              {
                x: "9",
                y: 74453,
              },
            ],
          },
          {
            id: "D",
            data: [
              {
                x: "1",
                y: -49899,
              },
              {
                x: "2",
                y: 13864,
              },
              {
                x: "3",
                y: -45673,
              },
              {
                x: "4",
                y: -20270,
              },
              {
                x: "5",
                y: 99430,
              },
              {
                x: "6",
                y: 17283,
              },
              {
                x: "7",
                y: -6514,
              },
              {
                x: "8",
                y: -21766,
              },
              {
                x: "9",
                y: -52610,
              },
            ],
          },
          {
            id: "E",
            data: [
              {
                x: "1",
                y: 81123,
              },
              {
                x: "2",
                y: -25153,
              },
              {
                x: "3",
                y: 2577,
              },
              {
                x: "4",
                y: 24409,
              },
              {
                x: "5",
                y: 82923,
              },
              {
                x: "6",
                y: 51283,
              },
              {
                x: "7",
                y: 10208,
              },
              {
                x: "8",
                y: 4055,
              },
              {
                x: "9",
                y: -14699,
              },
            ],
          },
        ]}
        margin={{ top: 0, right: 10, bottom: 30, left: 30 }}
        axisTop={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 16,
        }}
        colors={{
          type: "sequential",
          scheme: "blue_green",
        }}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
        ariaLabel="A heatmap chart/matrix"
      />
    </div>
  );
}
