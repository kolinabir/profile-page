import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import LineChartRating from "./LineChartRating";

const Rating = () => {
  return (
    <div className="w-full grid gap-3">
      <Card className="w-full">
        <Card className="rounded-t-md h-[50%] rounded-b-none ">
          <LineChartRating></LineChartRating>
        </Card>
        <Card className="rounded-t-md h-[50%] rounded-b-none ">
          <CardHeader>
            <CardTitle>Earned Badges</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="text-center text-sm font-semibold ">
              <Image
                title="Solved 10 problems"
                className="mx-auto"
                src={
                  "https://cdn-icons-png.flaticon.com/128/11851/11851561.png"
                }
                alt="badge"
                width={50}
                height={50}
              />
              <div>
                <h4>Solution Seeker</h4>
              </div>
            </div>
            <div className="text-center text-sm font-semibold">
              <Image
                title="Solved 10 problems"
                className="mx-auto"
                src={"https://cdn-icons-png.flaticon.com/128/1147/1147830.png"}
                alt="badge"
                width={50}
                height={50}
              />
              <div>
                <h4>Brainstormer</h4>
              </div>
            </div>
            <div className="text-center text-sm font-semibold">
              <Image
                title="Solved 10 problems"
                className="mx-auto"
                src={"https://cdn-icons-png.flaticon.com/128/5611/5611117.png"}
                alt="badge"
                width={50}
                height={50}
              />
              <div>
                <h4>Puzzle Master</h4>
              </div>
            </div>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};

export default Rating;
