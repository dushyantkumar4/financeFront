import AnalystDashboard from "./AnalystDashboard.tsx";
import AdminDashboard from "./AdminDashboard.tsx";
import UserDashboard from "./UserDashboard.tsx";
import { useMyContext } from "@/hooks/useMyContext.ts";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useMyContext();
  if (!user) {
    return <Navigate to="/login" />;
  }

  const roleMap = {
    Viewer: <UserDashboard />,
    Analyst: <AnalystDashboard />,
    Admin: <AdminDashboard />,
  };

  return roleMap[user.role] || <div>Unauthorized</div>;
};

export default Dashboard;
