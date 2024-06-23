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
    // search for the date in the value array
    // if found, set the count to the count of that date
    let count = "0";
    for (let i = 0; i < value.length; i++) {
      if (value[i].date === date) {
        count = value[i].count.toString() || "0";
        continue;
      } else {
        count = "0";
      }
    }
    setTooltipContent(`${count} contributions on ${formattedDate}`);
  };

  const handleCellMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className=" mt-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative  ">
              <HeatMap
                className="text-2xl"
                rectSize={15}
                value={value}
                width="900"
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
                rectRender={(props, data) => (
                  <rect
                    {...props}
                    data-date={data.date}
                    fill={data.count ? "#40c463" : "#ebedf0"}
                  />
                )}
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

export default GithubStyleHeatmap;
