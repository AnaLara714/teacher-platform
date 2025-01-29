import React from "react";
import { useNavigate } from "react-router-dom";
import { getStudents, deleteStudent } from "../services/studentService";
import { Header } from "../components/header/Header";
import { IStudent } from "../utils/interfaces";
import { Button } from "../components/Button/Button";

export const StudentList: React.FC = () => {
  const [students, setStudents] = React.useState<IStudent[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data.students);
    };

    fetchStudents();
  }, [students]);

  const ButtonDeleteClickHandler = (id: string) => {
    deleteStudent(id);
  };
  return (
    <div>
      <Header />
      <div className="w-4/5 flex flex-col justify-center items-center mt-0 mb-0 ml-auto mr-auto">
        <div className="flex flex-row w-full justify-between items-center">
          <h2 className="font-extrabold text-2xl">Alunos</h2>
          <Button
            txtButton="Criar Registro"
            widthButton="w-44 "
            onClickButton={() => navigate("/create-student")}
          />
        </div>
        {/* <div> */}
        <ul className="flex flex-col justify-center items-center w-full">
          {students.length === 0 ? (
            <span className="mt-[30%]">
              Ainda não há estudantes cadastrados
            </span>
          ) : (
            students.map((student) => (
              <li key={student._id}>
                <span> {student.name} </span>
                <span> {student.age}</span>
                <span> {student.studentClass}</span>
                <button onClick={() => ButtonDeleteClickHandler(student._id)}>
                  deletar
                </button>
              </li>
            ))
          )}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};
