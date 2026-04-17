export interface User {
  _id: string;
  name: string;
  email: string;
  role: "User" | "Analyst" | "Admin"; 
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
  __v: number;
}