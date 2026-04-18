export interface User {
  _id: string;
  name: string;
  email: string;
  role: "Viewer" | "Analyst" | "Admin"; 
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
  __v: number;
}