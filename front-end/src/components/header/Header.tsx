import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";

export const Header = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
  };

  React.useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h3>CODETECH</h3>
      <button onClick={() => logoutHandler()}>Sair</button>
    </div>
  );
};
