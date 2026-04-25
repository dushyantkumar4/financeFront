import { useEffect, useState } from "react";
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EditUser, EditUserRole } from "@/components/EditUser";

const AdminDashboard = () => {
  const [data, setData] = useState<User[] | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get(`/api/users`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

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
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="rounded-full bg-green-900 px-2 text-white cursor-pointer">
                            role
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm">
                          <EditUserRole userId={item._id} />
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="rounded-full bg-green-900 px-2 text-white cursor-pointer">
                            profile
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm">
                          <EditUser userId={item._id} />
                        </DialogContent>
                      </Dialog>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard openDelay={10} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Trash2 className="size-4 text-red-500" />
                    </HoverCardTrigger>
                    <HoverCardContent className="flex flex-col gap-1 w-28 bg-green-50">
                      <p>Are you sure ? </p>
                      <div className="flex gap-3">
                        <button className=" text-green-900 cursor-pointer">
                          Yes
                        </button>
                        <button className="rounded-full bg-green-900 px-2 text-white cursor-pointer">
                          No
                        </button>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
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
