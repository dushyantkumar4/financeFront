import AddFinance from "./AddFinance";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type {
  Transaction,
  CategoryTotal,
  MonthlyTrend,
} from "@/types/AnalystDashboard";
import { History, Trash2, PencilLine } from "lucide-react";
import { api } from "@/api/client";
import { toast } from "sonner";
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
import { useNavigate } from "react-router-dom";

interface RecentProp {
  recent: Transaction[];
  refetch?: () => void;
}
interface CategoryProg {
  categoryTotals: CategoryTotal[];
}
interface MonthlyProp {
  monthlyTrends: MonthlyTrend[];
}

export const FinanceTable = ({ recent,refetch }: RecentProp) => {
  const navigate = useNavigate();
  const deleteFinance = async (id: string) => {
    try {
      await api.delete(`/api/amount/${id}`);
      toast.success("Deleted successfully", { position: "top-center" });
      refetch?.();
      navigate("/dashboard");
    } catch (err) {
      toast.error("Failed to delete", { position: "top-center" });
    }
  };
  return (
    <Card className="bg-green-50">
      <CardHeader>
        <CardTitle className="font-bold text-2xl text-green-900 flex items-center">
          Recent Activities &nbsp;
          <History />
        </CardTitle>
      </CardHeader>
      <CardContent className="max-h-55 overflow-y-auto">
        <Table className=" rounded-lg text-green-500">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Activities</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recent.map((invoice) => (
              <TableRow key={invoice._id}>
                <TableCell className="font-medium">
                  {invoice.date.split("T")[0]}
                </TableCell>
                <TableCell>{invoice.category}</TableCell>
                <TableCell>{invoice.type}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell className="text-right flex items-center justify-end gap-3 ">
                  <AddFinance
                    mode="edit"
                    refetch={refetch}
                    initialData={invoice}
                    trigger={
                      <button>
                        <PencilLine className="size-4" />
                      </button>
                    }
                  />
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
                          className="text-black"
                          onClick={() => deleteFinance(invoice._id)}
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
    </Card>
  );
};

export const CategoryTable = ({ categoryTotals }: CategoryProg) => {
  return (
    <div className="max-h-50 overflow-y-auto">
      <Table className="text-green-500">
        <TableCaption>Category wise total</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categoryTotals.map((item) => (
            <TableRow key={item.category}>
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell>{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const MonthlyTable = ({ monthlyTrends }: MonthlyProp) => {
  return (
    <div className="max-h-55 overflow-y-auto">
      <Table className="text-green-500">
        <TableCaption>Total of this month or given days by you</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {monthlyTrends.map((item) => (
            <TableRow key={item.month + item.total}>
              <TableCell className="font-medium">{item.month}</TableCell>
              <TableCell>{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
