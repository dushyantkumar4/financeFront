import type { ReactNode } from "react";
import { useState } from "react";
import { MyContext } from "@/context/MyContext";

type Props = {
  children: ReactNode;
};

const MyContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const providerValues = { theme, setTheme, loading, setLoading };
  return (
    <MyContext.Provider value={providerValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
