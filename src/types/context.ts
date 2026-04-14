import type { Dispatch, SetStateAction } from "react";

export type MyContextType = {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
