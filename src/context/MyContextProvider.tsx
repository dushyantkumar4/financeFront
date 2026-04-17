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
  const [theme, setTheme] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
  };
  useEffect(() => {
    const fetchUser = async () => {
      const res = await api.get("/me");
      setUser(res.data);
    };

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
  };
  return (
    <MyContext.Provider value={providerValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
