import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Doughnut, PolarArea } from "react-chartjs-2";

// import "./styles.css";
import { Data } from "@/utils/Data";
import PieChart from "./PieCharts";
import { CardContent } from "@/components/ui/card";

Chart.register(CategoryScale);

export default function Charts() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.problemType),
    total: Data.map((data) => data.total),
    datasets: [
      {
        label: "Solved Total",
        total: "Total Problems",
        data: Data.map((data) => data.solved),
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
        ],

        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <CardContent className="flex justify-between items-center">
        <div>
          <h1>Problems Solved</h1>
          <div className="">
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              aria-label="Problems Solved"
            />
          </div>
        </div>
        <div className=""></div>
      </CardContent>
    </div>
  );
}
