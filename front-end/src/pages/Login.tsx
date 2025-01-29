import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ILoginForm {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<ILoginForm>();
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: ILoginForm) => {
    await login(data.email, data.password);
    console.log(data.email, "e ", data.password);
  };

  React.useEffect(() => {
    if (isAuthenticated) navigate("/students");
  }, [isAuthenticated, navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>email</label>
        <input {...register("email")} type="email" />
      </div>
      <div>
        <label>senha</label>
        <input {...register("password")} type="password" />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};
