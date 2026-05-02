export type FinanceFormDialogProps = {
  mode: "add" | "edit";
  initialData?: {
    _id?: string;
    amount: number;
    type: string;
    category: string;
    date: string;
  };
  trigger: React.ReactNode;
  refetch?: () => void;
};
