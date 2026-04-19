import { PieChart, Pie } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface CategoryTotal {
  category: string;
  total: number;
}

interface AnalystChartProps {
  categoryTotals: CategoryTotal[];
}

const AnalystChart = ({ categoryTotals }: AnalystChartProps) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

  const chartData = categoryTotals.map((item, index) => ({
    name: item.category,
    value: item.total,
    fill: COLORS[index % COLORS.length],
  }));

  const chartConfig = Object.fromEntries(
    categoryTotals.map((item, index) => [
      item.category,
      {
        label: item.category,
        color: COLORS[index % COLORS.length],
      },
    ])
  );

  return (
    <ChartContainer config={chartConfig} className="w-md">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />

        <Pie data={chartData} dataKey="value" nameKey="name" />
      </PieChart>
    </ChartContainer>
  )
}

export default AnalystChart