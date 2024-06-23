import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <CardDescription>
            Badges are earned by solving problems and participating in contests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rating;
