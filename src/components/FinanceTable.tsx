import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Transaction } from "@/types/AnalystDashboard";
interface RecentProp {
  recent:Transaction[];
}


const FinanceTable = ({ recent }:RecentProp) => {
  return (
    <Table className="bg-green-100 rounded-lg">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Date</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recent.map((invoice) => (
          <TableRow key={invoice._id}>
            <TableCell className="font-medium">
              {invoice.date.split('T')[0]}
            </TableCell>
            <TableCell>{invoice.category}</TableCell>
            <TableCell>{invoice.type}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FinanceTable;
