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
import { History,Trash2 ,PencilLine  } from "lucide-react";

interface RecentProp {
  recent: Transaction[];
}
interface CategoryProg {
  categoryTotals: CategoryTotal[];
}
interface MonthlyProp {
  monthlyTrends: MonthlyTrend[];
}

export const FinanceTable = ({ recent }: RecentProp) => {
  return (
    <Card className="bg-green-50">
      <CardHeader>
        <CardTitle className="font-bold text-2xl text-green-900 flex items-center">
          Recent Activities &nbsp;<History/>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className=" rounded-lg text-green-900">
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
                  <button><PencilLine  className="size-4"/></button>
                  <button><Trash2 className="size-4 text-red-500"/></button>
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
    <Table className="">
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
  );
};

export const MonthlyTable = ({ monthlyTrends }: MonthlyProp) => {
  return (
    <Table className="">
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
  );
};
