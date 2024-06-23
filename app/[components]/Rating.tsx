import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Rating = () => {
  return (
    <div className="w-full grid gap-3">
      <Card className="">
        <Card className="rounded-t-md rounded-b-none">
          <CardHeader>
            <CardTitle>Overall rating</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="rounded-t-none rounded-b-md">
          <CardHeader>
            <CardTitle>Campaign Period Rating</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Earned Badges</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="text-center text-sm font-semibold ">
            <Image
              title="Solved 10 problems"
              className="mx-auto"
              src={"https://cdn-icons-png.flaticon.com/128/11851/11851561.png"}
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
    </div>
  );
};

export default Rating;
