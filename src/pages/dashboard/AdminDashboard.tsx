import { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UsersRound, Eye, Trash2, PencilLine } from "lucide-react";
import type { User } from "@/types/user.type";
import { api } from "@/api/client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { EditUser, EditUserRole } from "@/components/EditUser";
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
import { toast } from "sonner";

const AdminDashboard = () => {
  const [data, setData] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    try {
      const res = await api.get(`/api/users`);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const deleteUser = async (id: string) => {
    try {
      await api.delete(`/api/me/${id}`);
      toast.success("User deleted successfully", { position: "top-center" });
    } catch (err) {
      toast.error("Failed to delete user", { position: "top-center" });
    }
  };

  return (
    <Card className="bg-green-50 text-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-bold text-2xl text-green-900">
          All Users <UsersRound />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Activities</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: User) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-right flex items-center justify-end gap-4 ">
                  <button className="cursor-pointer">
                    <Eye className="size-4 hover:text-green-600" />
                  </button>
                  <HoverCard openDelay={10} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <PencilLine className="size-4" />
                    </HoverCardTrigger>
                    <HoverCardContent className="flex gap-3 w-32 bg-green-50">
                      <EditUserRole
                        initialData={item}
                        refetch={fetchUsers}
                        trigger={
                          <button className="rounded-full bg-green-900 px-2 text-white cursor-pointer">
                            role
                          </button>
                        }
                      />
                      <EditUser
                        initialData={item}
                        refetch={fetchUsers}
                        trigger={
                          <button className="rounded-full bg-green-900 px-2 text-white cursor-pointer">
                            Profile
                          </button>
                        }
                      />
                    </HoverCardContent>
                  </HoverCard>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Trash2 className="size-4 text-red-500 cursor-pointer" />
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
                          onClick={() => deleteUser(item._id)}
                        >
                          Yes
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default AdminDashboard;
