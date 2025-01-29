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
      <div className="w-4/5 flex flex-col justify-center items-center mt-0 mb-0 ml-auto mr-auto font-poppins">
        <div className="flex flex-row w-full justify-between items-center mt-10">
          <h2 className="font-extrabold text-2xl">Alunos</h2>
          <Button
            txtButton="Criar Registro"
            widthButton="w-44 "
            onClickButton={() => navigate("/create-student")}
          />
        </div>
        {/* <div> */}
        <ul className="flex flex-col justify-center items-stretch w-full mt-0 mb-0 ml-auto mr-auto">
          {students.length === 0 ? (
            <span className="text-center mt-[30%]">
              Ainda não há estudantes cadastrados
            </span>
          ) : (
            <div className="flex flex-col w-full mt-10 justify-around">
              <div className="grid grid-cols-4 items-center justify-center bg-[#EEEEEE] w-full rounded-lg h-12 text-center gap-16">
                <span>nome</span>
                <span>idade</span>
                <span>turma</span>
                <span>deletar</span>
              </div>
              {students.map((student) => (
                <li
                  key={student._id}
                  className="grid grid-cols-4 items-center justify-center text-center w-full gap-16 h-12 mt-4"
                >
                  <span> {student.name} </span>
                  <span> {student.age}</span>
                  <span> {student.studentClass}</span>
                  <button
                    onClick={() => ButtonDeleteClickHandler(student._id)}
                    className="text-center pl-[50%] cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="undefined"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  </button>
                </li>
              ))}
            </div>
          )}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};
