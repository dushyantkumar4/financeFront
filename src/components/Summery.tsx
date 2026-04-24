import { Wallet, Landmark, HandCoins } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Summary } from "@/types/AnalystDashboard";
import AddFinance from "./AddFinance";

export interface SummeryType {
    summery:Summary;
}

const Summery = ({ summery }: SummeryType) => {
  return (
    <Card className="w-full bg-green-50">
      <CardHeader>
        <CardTitle className="font-bold text-2xl text-green-900">
          Summary
        </CardTitle>
        <CardAction className="">
          <AddFinance/>
        </CardAction>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="text-center shadow-lg bg-green-100">
          <CardHeader className="flex flex-col items-center">
            <Landmark />
            <CardTitle>Tatal Amount</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-bold">
            {summery?.totalIncome ?? 0}
          </CardContent>
        </Card>
        <Card className="text-center shadow-lg bg-red-100">
          <CardHeader className="flex flex-col items-center">
            <HandCoins />
            <CardTitle>Tatal Expense</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-bold">
            {summery?.totalExpense ?? 0}
          </CardContent>
        </Card>
        <Card className="text-center shadow-lg bg-green-100">
          <CardHeader className="flex flex-col items-center">
            <Wallet className="" />
            <CardTitle>Avl Balance</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-bold">
            {summery?.netBalance ?? 0}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Summery;
