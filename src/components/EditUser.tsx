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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { api } from "@/api/client";
import type { UserFormDilogProp, RoleFormProp } from "@/types/user.type";

export const EditUser = ({ initialData, trigger }: UserFormDilogProp) => {
  const [formData, setFormData] = useState({
    name: initialData?.name ?? "",
    password: initialData?.password ?? "",
    status: initialData?.status ?? "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post(`/api/me/${initialData?._id}`, formData);
      toast.success("success", {
        position: "top-center",
        description: "user updated successfuly",
      });
      setOpen(false);
    } catch (err) {
      const error = err as AxiosError<{ errors?: string }>;
      toast.error("error", {
        position: "top-center",
        description: error?.response?.data?.errors || "unable to update",
      });
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);

        if (isOpen && initialData) {
          setFormData({
            name: initialData.name ?? "",
            password: "",
            status: initialData.status ?? "",
          });
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-sm lg:max-w-lg bg-green-100">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
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
                  setFormData((prev) => ({ ...prev, status: value }))
                }
                required
              >
                <SelectTrigger id="status-select">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="active">active</SelectItem>
                    <SelectItem value="inactive">inactive</SelectItem>
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
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const EditUserRole = ({ initialData, trigger }: RoleFormProp) => {
  const [roleVal, setRoleVal] = useState({ role:initialData?.role ?? "", });
  const [open, setOpen] = useState(false);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post(`api/me/${initialData?._id}/role`, roleVal);
      toast.success("success", {
        position: "top-center",
        description: "role updated",
      });
    } catch (err) {
      const error = err as AxiosError<{ errors?: string }>;
      toast.error("error", {
        position: "top-center",
        description: error?.response?.data?.errors || "unable to update role",
      });
    }
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);

        if (isOpen && initialData) {
          setRoleVal({
            role:initialData.role ?? "",
          });
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit Role</DialogTitle>
          <DialogDescription>
            Make changes to your Role here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field className="text-green-500">
              <FieldLabel htmlFor="role-select">Status</FieldLabel>
              <Select
                value={roleVal.role}
                onValueChange={(value) =>
                  setRoleVal((prev) => ({ ...prev, status: value }))
                }
                required
              >
                <SelectTrigger id="role-select">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Analyst">Analyst</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
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
        </form>
      </DialogContent>
    </Dialog>
  );
};
