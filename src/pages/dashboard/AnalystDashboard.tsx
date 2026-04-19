import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import AnalystChart from "@/chart/Analyst.chart";
import type { DashboardData } from "@/types/AnalystDashboard";
import { useMyContext } from "@/hooks/useMyContext";
import { api } from "@/api/client";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Summery from "@/components/Summery";
import FinanceTable from "@/components/FinanceTable";

const AnalystDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [formData, setFormData] = useState({
    category: "",
    days: 30,
  });
  const { user } = useMyContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
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
    <div className="flex flex-col gap-5">
      {data?.summery && <Summery summery={data.summery} />}
      <Card className="w-full bg-green-50">
        <CardHeader>
          <CardTitle className="font-bold text-2xl text-green-900">
            Search Accrordinly
          </CardTitle>
          <form action="" className="">
            <FieldGroup className="flex flex-col md:flex-row">
              <Field className="text-green-500">
                <FieldLabel htmlFor="form-category">Category</FieldLabel>
                <Input
                  id="form-category"
                  type="text"
                  placeholder="Enter category"
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Field>
              <Field className="text-green-500">
                <FieldLabel htmlFor="form-days">Days</FieldLabel>
                <Input
                  id="form-days"
                  type="text"
                  placeholder="Enter Days"
                  required
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                />
              </Field>
            </FieldGroup>
          </form>
          <CardAction>
            <Button>
              <Search />
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent className="flex w-full">
          <AnalystChart categoryTotals={data?.categoryTotals ?? []} />
          <Card>
            <CardHeader>Filtered Data</CardHeader>
            <CardContent></CardContent>
          </Card>
        </CardContent>
      </Card>
      {data?.recent && <FinanceTable recent={data?.recent ?? []} />}
    </div>
  );
};

export default AnalystDashboard;
