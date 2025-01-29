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
    <div className="bg-[#D64B14] font-poppins text-white flex flex-row justify-between h-16 items-center pl-14 pr-8">
      <h3 className="font-extrabold text-4xl">CODETECH</h3>
      <button className="cursor-pointer" onClick={() => logoutHandler()}>
        Sair
      </button>
    </div>
  );
};
