import { api } from "@/api/client";
import { useState,useEffect } from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

const UserDashboard = () => {
  const [data, setData] = useState<{
    totalUsers: number;
    activeUsers: number;
  }>({
    totalUsers: 0,
    activeUsers: 0,
  });
  useEffect(() => {
    const dashboardData = async () => {
      const res = await api.get("/api/dashboard");

      setData({
        totalUsers: res.data.totalUsers,
        activeUsers: res.data.activeUsers,
      });
    };

    dashboardData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card className="flex items-center justify-center p-4 bg-green-100 shadow-2xl">
        <CardTitle>Total Users on our plateform </CardTitle>
        <CardContent className="text-gray-500">{data.totalUsers}</CardContent>
      </Card>
      <Card className="flex items-center justify-center p-4 bg-green-100 shadow-2xl">
        <CardTitle>Total Active Users on our plateform </CardTitle>
        <CardContent className="text-gray-500">{data.activeUsers}</CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
