import React, { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <button className="btn loading">loading</button>
      </div>
    );
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
