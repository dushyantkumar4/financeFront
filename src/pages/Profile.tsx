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
import { api } from "@/api/client";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { EditUser } from "@/components/EditUser";

const Profile = () => {
  const { user ,fetchUser} = useMyContext();
  const navigate = useNavigate();
  const handleDelete = async (userId: string) => {
    try {
      await api.delete(`/api/me/${userId}`);
      toast.success("sussess", {
        position: "top-center",
        description: "User deleted successfuly",
      });
      navigate("/");
    } catch (err) {
      const error = err as AxiosError<{ errors?: string }>;
      toast.error("error", {
        position: "top-center",
        description: error?.response?.data?.errors || "can't delete the user",
      });
    }
  };

  return (
    <Card className="w-full bg-green-50">
      <CardHeader>
        <CardTitle className="font-bold text-2xl flex items-center">
          Hello&nbsp;
          <HeartHandshake className="text-green-500" /> &nbsp;{user?.name}
        </CardTitle>
        <CardDescription>Here is your profile details</CardDescription>
        <CardAction>
          <EditUser
            initialData={user}
            refetch={fetchUser}
            trigger={
              <Button>
                Edit <SquarePen />
              </Button>
            }
          />
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
            <ItemDescription>{user?.email}</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Role</ItemTitle>
            <ItemDescription>{user?.role}</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Status</ItemTitle>
            <ItemDescription>{user?.status}</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className="bg-green-100">
          <ItemContent>
            <ItemTitle>Registered on</ItemTitle>
            <ItemDescription>{user?.createdAt.split("T")[0]}</ItemDescription>
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-red-500 hover:bg-red-600 text-white cursor-pointer shadow-sm">
                  Delete
                  <Trash2 className="size-4 cursor-pointer" />
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent className="bg-green-100">
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will delete forever
                </AlertDialogDescription>

                <AlertDialogFooter className="text-black">
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <AlertDialogAction
                    className=""
                    onClick={() => {
                      if (!user?._id) return;
                      handleDelete(user?._id);
                    }}
                  >
                    Yes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </ItemActions>
        </Item>
      </CardFooter>
    </Card>
  );
};

export default Profile;
