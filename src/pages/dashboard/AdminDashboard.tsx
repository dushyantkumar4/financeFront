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
} from "@/components/ui/pagination"

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
                  <button>
                    <Eye className="size-4 " />
                  </button>
                  <button>
                    <PencilLine className="size-4" />
                  </button>
                  <button>
                    <Trash2 className="size-4 text-red-500" />
                  </button>
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
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
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
