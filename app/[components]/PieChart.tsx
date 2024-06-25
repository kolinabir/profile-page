import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Define the structure for each data point
interface ProblemData {
  category: string;
  solved: number;
  total: number;
}

// Define the component's prop types (if any external props are needed)
interface ProblemDifficultyChartProps {
  // Add any props here if needed
}

// Define the component's state
interface ProblemDifficultyChartState {
  series: number[];
  options: ApexOptions;
}

class PieChart extends React.Component<
  ProblemDifficultyChartProps,
  ProblemDifficultyChartState
> {
  private chartData: ProblemData[];

  constructor(props: ProblemDifficultyChartProps) {
    super(props);

    this.chartData = [
      { category: "Easy", solved: 35, total: 100 },
      { category: "Medium", solved: 23, total: 200 },
      { category: "Hard", solved: 15, total: 150 },
      { category: "Super Hard", solved: 7, total: 50 },
    ];

    this.state = {
      series: this.chartData.map((item) => item.solved),
      options: this.getChartOptions(),
    };
  }

  getChartOptions = (): ApexOptions => {
    return {
      labels: this.chartData.map((item) => item.category),
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
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                offsetY: 16,
                formatter: (val: string): string => `${val}`,
              },
              total: {
                show: true,
                label: "Total Solved",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                formatter: (): string => {
                  const totalSolved = this.chartData.reduce(
                    (sum, item) => sum + item.solved,
                    0
                  );
                  const totalProblems = this.chartData.reduce(
                    (sum, item) => sum + item.total,
                    0
                  );
                  return `${totalSolved} / ${totalProblems}`;
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
        formatter: (
          seriesName: string,
          opts: { seriesIndex: number }
        ): string => {
          const dataPoint = this.chartData[opts.seriesIndex];
          return `${seriesName}: ${dataPoint.solved} / ${dataPoint.total}`;
        },
      },
      tooltip: {
        y: {
          formatter: (
            value: number,
            { seriesIndex }: { seriesIndex: number }
          ): string => {
            const dataPoint = this.chartData[seriesIndex];
            return `${value} solved out of ${dataPoint.total} total problems`;
          },
        },
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

  render(): React.ReactNode {
    return (
      <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between">
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

        <div className="py-6">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={320}
          />
        </div>
        <div className="">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Total Submissions:{" "}
            {this.chartData.reduce((sum, item) => sum + item.solved, 0)}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Acceptance Rate:{" "}
            {Math.round(
              (this.chartData.reduce((sum, item) => sum + item.solved, 0) /
                this.chartData.reduce((sum, item) => sum + item.total, 0)) *
                100
            )}
            %
          </div>
        </div>
      </div>
    );
  }
}

export default PieChart;
