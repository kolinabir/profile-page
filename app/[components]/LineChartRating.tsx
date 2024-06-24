import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const series = {
  monthDataSeries1: {
    rating: [
      100.0, 200.0, 300.0, 400.0, 350.0, 600.0, 450.0, 550.0, 700.0, 820.0,
      600.0, 700.0, 1300.0, 1400.0, 1500.0,
    ],
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

interface LineChartRatingProps {}

const LineChartRating: React.FC<LineChartRatingProps> = () => {
  const options: ApexOptions = {
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

  const seriesData = [
    {
      data: series.monthDataSeries1.rating,
    },
  ];

  return (
    <div className="w-full h-80">
      <ReactApexChart
        options={options}
        series={seriesData}
        type="line"
        height="70%"
        width="100%"
      />
    </div>
  );
};

export default LineChartRating;
