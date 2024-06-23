import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const WebsiteTraffic: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ApexCharts | null>(null);

  const chartData = [
    { category: "Easy", value: 35 },
    { category: "Medium", value: 23 },
    { category: "Hard", value: 15 },
  ];

  const getChartOptions = (): ApexCharts.ApexOptions => {
    return {
      series: chartData.map((item) => item.value),
      labels: chartData.map((item) => item.category),
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Inter, sans-serif",
                offsetY: 30,
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (val) {
                  return val.toString();
                },
              },
              total: {
                show: true,
                label: "Total",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                formatter: function (w) {
                  return w.globals.seriesTotals
                    .reduce((a, b) => a + b, 0)
                    .toString();
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  };

  useEffect(() => {
    if (
      chartRef.current &&
      typeof ApexCharts !== "undefined" &&
      !chartInstance.current
    ) {
      chartInstance.current = new ApexCharts(
        chartRef.current,
        getChartOptions()
      );
      chartInstance.current.render();
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
            Problem Difficulty Distribution
          </h5>
          <svg
            data-popover-target="chart-info"
            data-popover-placement="bottom"
            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
          </svg>
        </div>
      </div>

      <div className="py-6" ref={chartRef}></div>
    </div>
  );
};

export default WebsiteTraffic;
