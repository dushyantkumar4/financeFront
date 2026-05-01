import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { MyContext } from "@/context/MyContext";
import type { User } from "@/types/user.type";
import { toast } from "sonner";
import { api } from "@/api/client";

type Props = {
  children: ReactNode;
};

const MyContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
  };

  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const res = await api.get("/api/me");
      setUser(res.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);

  const providerValues = {
    theme,
    setTheme,
    loading,
    setLoading,
    user,
    setUser,
    logout,
    fetchUser,
  };
  return (
    <MyContext.Provider value={providerValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
