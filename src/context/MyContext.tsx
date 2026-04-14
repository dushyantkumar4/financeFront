import { createContext } from "react";
import type { MyContextType } from "@/types/context";

export const MyContext = createContext<MyContextType | null>(null);
