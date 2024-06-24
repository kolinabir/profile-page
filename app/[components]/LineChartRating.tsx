import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Badge } from "@/components/ui/badge";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Move series data outside of the component
const series = {
  monthDataSeries1: {
    rating: [
      100, 200, 300, 400, 350, 600, 450, 550, 700, 820, 600, 700, 1300, 1400,
      1500,
    ],
    campaignRating: [200, 300, 400, 500, 450, 700, 550, 650, 800, 920],
    dates: [
      "13 Nov 2017",
      "14 Dec 2017",
      "15 Jan 2018",
      "16 Feb 2018",
      "17 Mar 2018",
      "18 Apr 2018",
      "19 May 2018",
      "20 Jun 2018",
      "21 Jul 2018",
      "22 Aug 2018",
      "23 Sep 2018",
      "24 Oct 2018",
      "25 Nov 2018",
      "26 Dec 2018",
      "27 Jan 2019",
    ],
  },
};

// Create options outside of the component
const chartOptions: ApexOptions = {
  chart: {
    height: 150,
    type: "line",
    id: "areachart-2",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    padding: {
      right: 30,
      left: 20,
    },
  },
  title: {
    text: "Rating",
    align: "left",
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
  },
};

// Create series data outside of the component
const seriesData = [
  {
    data: series.monthDataSeries1.rating,
  },
  {
    data: series.monthDataSeries1.campaignRating,
  },
];

// Create performance data outside of the component
const performanceData = [
  { label: "Contest Rating", value: 1500 },
  { label: "Attended Contests", value: 10 },
  { label: "Global Rank", value: "1500/10000" },
  { label: "Level", value: 5, isBadge: true },
];

const LineChartRating: React.FC = () => {
  return (
    <div className="w-full h-80">
      <div className="text-lg font-semibold px-3 pt-3">Contest Performance</div>
      <div className="grid grid-cols-2 gap-2 mb-2 h-[30%] p-3">
        {performanceData.map(({ label, value, isBadge }) => (
          <div key={label}>
            <p className="text-xs font-medium text-muted-foreground">{label}</p>
            {isBadge ? (
              <Badge variant="secondary" className="text-xs">
                <span className="text-blue-500">{value}</span>
              </Badge>
            ) : (
              <p className="text-sm font-semibold">
                <span className="text-blue-500">{value}</span>
              </p>
            )}
          </div>
        ))}
      </div>
      <ReactApexChart
        options={chartOptions}
        series={seriesData}
        type="line"
        height="70%"
        width="100%"
      />
    </div>
  );
};

export default LineChartRating;
