import React from "react";
import { useForm } from "react-hook-form";
import { IStudent } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/studentService";
import { SideBar } from "../components/SideBar/SideBar";
import { Button } from "../components/Button/Button";

export const CreateStudent: React.FC = () => {
  const { register, handleSubmit } = useForm<IStudent>();
  const navigate = useNavigate();

  const onSubmit = async (data: IStudent) => {
    await createStudent(data);
    navigate("/students");
  };

  return (
    <div className="grid grid-cols-4 h-screen w-full">
      <SideBar />
      <div className="col-span-3">
        <div className="w-full">
          <hr className="w-full mt-16 border-[#BBBBBB] border" />
        </div>
        <div className="flex flex-col w-4/5 mt-0 mb-0 ml-auto mr-auto justify-between h-[80vh]">
          <div className="w-full flex flex-row items-center justify-between mt-2">
            <h2 className="font-extrabold text-2xl">Alunos</h2>
            <Button
              txtButton="Voltar"
              widthButton="w-44"
              onClickButton={() => navigate("/students")}
            />
          </div>
          <form
            className="border-[#DDDDDD] rounded-2xl border mt-10 pt-12 pl-8 pr-8 h-full flex-wrap"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col w-full col-span-3">
                <label className="font-light text-sm">nome completo</label>
                <input
                  {...register("name")}
                  type="text"
                  className="bg-[#EEEEEE] rounded-lg h-12 p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-light text-sm">idade</label>
                <input
                  {...register("age")}
                  type="number"
                  className="bg-[#EEEEEE] rounded-lg h-12 w-[153px] p-2"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label className="font-light text-sm">turma</label>
              <input
                {...register("studentClass")}
                type="number"
                className="bg-[#EEEEEE] rounded-lg h-12 w-[514px] p-2"
              />
            </div>
            <Button txtButton="Salvar" widthButton="w-44 mt-10" />
          </form>
        </div>
      </div>
    </div>
  );
};
