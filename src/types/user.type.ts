export interface User {
  _id: string;
  name: string;
  password?:string;
  email: string;
  role: "Viewer" | "Analyst" | "Admin"; 
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}