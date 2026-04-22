import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { api } from "@/api/client";

export const EditUser = (userId: string) => {
  const [formData, SetFormData] = useState({
    name: "",
    password: "",
    status: "active | inactive",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post(`/api/me/${userId}`, formData);
      toast.success("success", {
        position: "top-center",
        description: "user updated successfuly",
      });
    } catch (err) {
      const error = err as AxiosError<{ errors?: string }>;
      toast.error("error", {
        position: "top-center",
        description: error?.response?.data?.errors || "unable to update",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field className="text-green-500">
            <FieldLabel htmlFor="form-name">Name</FieldLabel>
            <Input
              id="form-name"
              type="text"
              placeholder="Enter your full name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Field>
          <Field className="text-green-500">
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input
              type="password"
              id="fieldgroup-password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Field>
          <Field className="text-green-500">
            <FieldLabel htmlFor="status-select">Status</FieldLabel>
            <Select
              value={formData.status}
              onValueChange={(value) =>
                SetFormData((prev) => ({ ...prev, status: value }))
              }
              required
            >
              <SelectTrigger id="status-select">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Analyst">active</SelectItem>
                  <SelectItem value="Viewer">inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </form>
  );
};
