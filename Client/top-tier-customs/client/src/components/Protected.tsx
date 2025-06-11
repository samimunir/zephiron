import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Protected = ({ children }: { children: React.ReactElement }) => {
  const { token, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-5xl text-rose-500 font-bold">
        LOADING...
      </div>
    );
  }

  return token && user ? children : <Navigate to="/login" replace />;
};

export default Protected;
