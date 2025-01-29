import React from "react";
import { useForm } from "react-hook-form";
import { IStudent } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/studentService";

export const CreateStudent: React.FC = () => {
  const { register, handleSubmit } = useForm<IStudent>();
  const navigate = useNavigate();

  const onSubmit = async (data: IStudent) => {
    await createStudent(data);
    navigate("/students");
  };

  return (
    <div>
      <div>
        <h2>Alunos</h2>
        <button onClick={() => navigate("/students")}>Voltar</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>nome</label>
          <input {...register("name")} type="text" />
        </div>
        <div>
          <label>idade</label>
          <input {...register("age")} type="text" />
        </div>
        <div>
          <label>turma</label>
          <input {...register("studentClass")} type="number" />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};
