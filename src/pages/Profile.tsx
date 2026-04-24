
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquarePen, HeartHandshake } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item";
import { useMyContext } from "@/hooks/useMyContext";

const Profile = () => {
  const { user } = useMyContext();

  return (
    <Card className="w-full bg-green-50">
      <CardHeader>
        <CardTitle className="font-bold text-2xl flex items-center">
          Hello&nbsp;
          <HeartHandshake className="text-green-500" /> &nbsp;{user?.name}
        </CardTitle>
        <CardDescription>Here is your profile details</CardDescription>
        <CardAction>
          <Button>
            Edit <SquarePen />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Name</ItemTitle>
            <ItemDescription>{user?.name}</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Email</ItemTitle>
            <ItemDescription>
              {user?.email}
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Role</ItemTitle>
            <ItemDescription>
              {user?.role}
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Status</ItemTitle>
            <ItemDescription>
              {user?.status}
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Registered on</ItemTitle>
            <ItemDescription>
              {user?.createdAt.split("T")[0]}
            </ItemDescription>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter className="">
        <Item variant="outline" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Delete Profile</ItemTitle>
            <ItemDescription>Your all Data will delete</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button className="bg-red-500 hover:bg-red-600 text-white cursor-pointer shadow-sm">
              Delete
            </Button>
          </ItemActions>
        </Item>
      </CardFooter>
    </Card>
  );
};

export default Profile;
