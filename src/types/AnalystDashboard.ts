export type Summary = {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
};

export type CategoryTotal = {
  category: string;
  total: number;
};

export type MonthlyTrend = {
  month: number;
  total: number;
};

export type Transaction = {
  _id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export type DashboardData = {
  summery: Summary; // keep your backend spelling or fix it there
  categoryTotals: CategoryTotal[];
  monthlyTrends: MonthlyTrend[];
  recent: Transaction[];
};
