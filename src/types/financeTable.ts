export type FinanceTable = {
  _id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: Date;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v?: string;
};
export type AllData = {
  recent: FinanceTable[];
};
