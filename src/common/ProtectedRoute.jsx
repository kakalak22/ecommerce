import React from "react";
import { useStore } from "../store";
import { useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [state, dispatch] = useStore();
  const { user } = state;

  return (
    <React.Fragment>
      {user?.email !== "" ? children : <Navigate to="/user/login" />}
    </React.Fragment>
  );
};

export default ProtectedRoute;
