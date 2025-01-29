import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";

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
    <div className="bg-[#EC622C] h-screen flex justify-end font-poppins max-sm:justify-center">
      <div className="bg-white flex flex-col w-1/2 items-center justify-center p-5 max-sm:w-full">
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="font-bold text-3xl">Login</h2>
          <span className="text-sm font-light">
            entre com seu email e senha
          </span>
        </div>
        <form className="w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-items-start mb-6">
            <label>email</label>
            <input
              {...register("email")}
              type="email"
              className="bg-[#EEEEEE] h-12 w-full rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col justify-items-start mb-6">
            <label>senha</label>
            <input
              {...register("password")}
              type="password"
              className="bg-[#EEEEEE] h-12 w-full rounded-lg p-2"
            />
          </div>

          <Button txtButton="Entrar" widthButton="w-full" />
        </form>
        <div className="absolute min-xl:mt-[48%] mt-[60%] max-md:mt-[150%] font-light">
          <span>
            desenvolvido por{" "}
            <a
              className="font-semibold"
              href="https://github.com/AnaLara714"
              target="_blank"
            >
              Ana Lara
            </a>
            , CodeTech
          </span>
        </div>
      </div>
    </div>
  );
};
