import React, { useState } from "react";
import { useStore } from "../store";
import { useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const [state, dispatch] = useStore();
  const [renderCount, setRenderCount] = useState(0);
  const { user } = state;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const newCount = renderCount;
    if (user?.email === "" && renderCount === 0)
      toast.error("Please log in first");
    setRenderCount(newCount + 1);
  }, []);

  return (
    <React.Fragment>
      {user?.email !== "" ? children : <Navigate to="/user/login" />}
    </React.Fragment>
  );
};

export default ProtectedRoute;
