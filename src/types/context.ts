import type { Dispatch, SetStateAction } from "react";
import type { User } from "@/types/user.type";

export type MyContextType = {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  logout: () => void;
  fetchUser :()=>void;
};
