export interface User {
  _id?: string;
  name?: string;
  password?: string;
  email?: string;
  role?: "Viewer" | "Analyst" | "Admin";
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}
export type UserFormDilogProp = {
  initialData?: User;
  trigger: React.ReactNode;
  refetch?: () => void;
};

export type RoleFormProp = {
  trigger: React.ReactNode;
  initialData?: User;
  refetch?: () => void;
};
