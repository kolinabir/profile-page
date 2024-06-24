"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import Charts from "./[components]/PieChart";
import Rating from "./[components]/Rating";
import HeatmapSubmission from "./[components]/HeatMap";
import { Suspense } from "react";
import PieChart from "./[components]/PieChart";

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:mx-36 mt-5">
      <Card className="lg:w-1/4">
        <CardContent className="flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-2 mt-2">
            <AvatarImage
              className="object-cover"
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">@abirkolin</h2>
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

            <li className="flex justify-between">
              <Badge>Python</Badge>
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
            className="  flex-col md:flex md:flex-row justify-between   
           gap-4 p-2"
          >
            <PieChart></PieChart>
            <Suspense fallback={<div>Loading...</div>}>
              <Rating></Rating>
            </Suspense>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="">
            <h3 className="text-base pt-4 font-semibold">
              25 submissions in the past one year
            </h3>
            <Suspense fallback={<div>Loading...</div>}>
              <HeatmapSubmission></HeatmapSubmission>
            </Suspense>
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
