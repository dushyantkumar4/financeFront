import { useMyContext } from "@/hooks/useMyContext";
import { ClipLoader } from "react-spinners";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type ProtectedProps = {
  children: ReactNode;
};

const Protected = ({ children }: ProtectedProps) => {
  const { user, loading } = useMyContext();

  if (loading)
    return (
      <div className="text-center">
        <ClipLoader color="#22C55E" />
      </div>
    );
  // if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default Protected;
