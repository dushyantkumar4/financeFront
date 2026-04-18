import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { FinanceTable, AllData } from "@/types/financeTable";

const FinanceTable = ({ recent }: AllData) => {
  return (
    <Table className="bg-green-100">
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
              {invoice.date}
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
