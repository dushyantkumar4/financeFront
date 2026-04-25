import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import { api } from "@/api/client";
import type { FinanceFormDialogProps } from "@/types/financeFormType";

const AddFinance = ({ mode, initialData, trigger }: FinanceFormDialogProps) => {
  const [formData, setFormData] = useState({
    amount: initialData?.amount ?? 0,
    type: initialData?.type ?? "",
    category: initialData?.category ?? "",
    date: initialData?.date ?? "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.type) {
      toast.error("Please select type", { position: "top-center" });
      return;
    }

    try {
      if (mode === "add") {
        await api.post("/api/amount", formData);
      } else {
        await api.put(`/api/amount/${initialData?._id}`, formData);
      }
      toast.success(
        mode === "add"
          ? "Finance added successfully"
          : "Finance updated successfully",
      );
      setOpen(false);
    } catch (err) {
      const error = err as AxiosError<{ errors?: string }>;
      toast.error("error", {
        position: "top-center",
        description: error?.response?.data?.errors || "can't add the amout",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-sm lg:max-w-lg bg-green-100">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add Amount" : "Update Amount"}
          </DialogTitle>
          <DialogDescription>
            You can add amount as salary , expense both
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field className="text-green-500">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                required
                type="number"
                min={1}
                name="amount"
                value={formData.amount}
                placeholder="Ex:- 10000"
                onChange={handleChange}
              />
            </Field>
            <Field className="text-green-500">
              <Label htmlFor="type-select">Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
                required
              >
                <SelectTrigger id="type-select">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="income">income</SelectItem>
                    <SelectItem value="expense">expense</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field className="text-green-500">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                type="text"
                required
                name="category"
                value={formData.category}
                placeholder="Enter category"
                onChange={handleChange}
              />
            </Field>
            <Field className="text-green-500">
              <Label htmlFor="Date">Date</Label>
              <Input
                id="Date"
                type="date"
                required
                name="date"
                value={formData.date}
                placeholder="Seledt date"
                onChange={handleChange}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
            <Button type="submit">{mode === "add" ? "Add" : "Update"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFinance;
