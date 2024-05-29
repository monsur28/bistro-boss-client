import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Mosaic } from "react-loading-indicators";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Mosaic color="#41d241" size="medium" text="" textColor="" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
