import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Wallet, Landmark, HandCoins } from "lucide-react";
import { useEffect, useState } from "react";
import AnalystChart from "@/chart/Analyst.chart";
import type { DashboardData } from "@/types/AnalystDashboard";
import { useMyContext } from "@/hooks/useMyContext";
import { api } from "@/api/client";
import FinanceTable from "@/components/FinanceTable";

const AnalystDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const { user } = useMyContext();

  useEffect(() => {
    const fetchDashboard = async () => {
      if (!user?._id) return;

      try {
        const res = await api.get(`/api/dashboard/${user._id}`);
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDashboard();
  }, [user]);
  return (
    <div>
      <Card className="w-full bg-green-50">
        <CardHeader>
          <CardTitle className="font-bold text-2xl text-green-900">
            Summary
          </CardTitle>
          <CardAction>
            <Button>
              Add <Plus />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="text-center shadow-lg bg-green-100">
            <CardHeader className="flex flex-col items-center">
              <Landmark />
              <CardTitle>Tatal Amount</CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-bold">
              {data?.summery.totalIncome ?? 0}
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg bg-red-100">
            <CardHeader className="flex flex-col items-center">
              <HandCoins />
              <CardTitle>Tatal Expense</CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-bold">
              {" "}
              {data?.summery.totalExpense ?? 0}
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg bg-green-100">
            <CardHeader className="flex flex-col items-center">
              <Wallet className="" />
              <CardTitle>Avl Balance</CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-bold">
              {data?.summery.netBalance ?? 0}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div>
        {/* left section  */}
        <div>
          <Card></Card>
          <AnalystChart categoryTotals={data?.categoryTotals ?? []} />
        </div>
        {/* right section  */}
        <FinanceTable recent={data?.recent ?? []}/>
      </div>
    </div>
  );
};

export default AnalystDashboard;
