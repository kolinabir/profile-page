import * as React from "react";
import * as ReactDOM from "react-dom";
import { Circle as CircleGeometry } from "@progress/kendo-drawing/geometry";
import { Layout, Text } from "@progress/kendo-drawing";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { Data } from "@/utils/Data";
let center;
let radius;
const labelContent = (e) => e.category;
const visualHandler = (e) => {
  // Obtain parameters for the segments
  center = e.center;
  radius = e.innerRadius;

  // Create default visual
  return e.createVisual();
};
const onRender = (e) => {
  // The center and radius are populated by now.
  // We can ask a circle geometry to calculate the bounding rectangle for us.
  //
  // http://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/Circle/
  const circleGeometry = new CircleGeometry([center.x, center.y], radius);
  const bbox = circleGeometry.bbox();

  // Render the text
  //
  // http://www.telerik.com/kendo-react-ui/components/drawing/api/Text/
  const heading = new Text("22.5%", [0, 0], {
    font: "28px Verdana,Arial,sans-serif",
  });
  const line1 = new Text("of which", [0, 0], {
    font: "16px Verdana,Arial,sans-serif",
  });
  const line2 = new Text("renewables", [0, 0], {
    font: "16px Verdana,Arial,sans-serif",
  });

  // Reflow the text in the bounding box
  //
  // http://www.telerik.com/kendo-react-ui/components/drawing/api/Layout
  // http://www.telerik.com/kendo-react-ui/components/drawing/api/LayoutOptions
  const layout = new Layout(bbox, {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    spacing: 5,
  });
  layout.append(heading, line1, line2);
  layout.reflow();

  // Draw it on the Chart drawing surface
  //
  // http://www.telerik.com/kendo-react-ui/components/charts/api/Chart/#toc-surface
  if (e.target.surface) {
    e.target.surface.draw(layout);
  }
};
export const ChartContainer = () => (
  <Chart onRender={onRender}>
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={Data}
        categoryField="kind"
        field="share"
        visual={visualHandler}
      >
        <ChartSeriesLabels
          color="#fff"
          background="none"
          content={labelContent}
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);
