export interface User {
  _id: string;
  name: string;
  password?: string;
  email: string;
  role: "Viewer" | "Analyst" | "Admin";
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}
export type UserFormDilogProp = {
  initialData?: {
    _id?: string;
    name: string;
    password: string;
    status: "active" | "inactive";
  };
  trigger: React.ReactNode;
};

export type RoleFormProp = {
  trigger: React.ReactNode;
  initialData?: {
    _id?: string;
    role: "Analyst" | "Viewer" | "Admin";
  };
};
