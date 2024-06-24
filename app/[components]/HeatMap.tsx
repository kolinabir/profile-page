import React, { useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const value = [
  { date: "2024/01/11", count: 2 },
  { date: "2024/04/12", count: 2 },
  { date: "2024/05/01", count: 5 },
  { date: "2024/05/02", count: 5 },
  { date: "2024/05/03", count: 1 },
  { date: "2024/05/04", count: 11 },
  { date: "2024/05/08", count: 32 },
  { date: "2024/05/08", count: 32 },
];

const GithubStyleHeatmap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  const handleCellMouseEnter = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const dateEntry = value.find((entry) => entry.date === date);
    const count = dateEntry ? dateEntry.count : 0;

    setTooltipContent(`${count} contributions on ${formattedDate}`);
  };

  const handleCellMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className="mt-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative">
              <HeatMap
                className="text-2xl"
                rectSize={15}
                value={value}
                width={900}
                monthLabels={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ]}
                startDate={new Date("2024/01/01")}
                endDate={new Date("2024/12/31")}
                panelColors={[
                  "#ebedf0",
                  "#9be9a8",
                  "#40c463",
                  "#30a14e",
                  "#216e39",
                ]}
                rectProps={{
                  rx: 2,
                  onMouseEnter: (event: React.MouseEvent<SVGRectElement>) =>
                    handleCellMouseEnter(
                      event.currentTarget.getAttribute("data-date") || ""
                    ),
                  onMouseLeave: handleCellMouseLeave,
                }}
                rectRender={(props, data) => {
                  const dateEntry = value.find(
                    (entry) => entry.date === data.date
                  );
                  const count = dateEntry ? dateEntry.count : 0;
                  return (
                    <rect
                      {...props}
                      data-date={data.date}
                      fill={count ? getColor(count) : "#ebedf0"}
                    />
                  );
                }}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">{tooltipContent}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

function getColor(count: number) {
  if (count === 0) return "#ebedf0";
  if (count < 5) return "#9be9a8";
  if (count < 10) return "#40c463";
  if (count < 20) return "#30a14e";
  return "#216e39";
}

export default GithubStyleHeatmap;
