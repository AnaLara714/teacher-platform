import React from "react";
import { useNavigate } from "react-router-dom";
import { getStudents, deleteStudent } from "../services/studentService";
import { Header } from "../components/header/Header";
import { IStudent } from "../utils/interfaces";

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
      <div>
        <div>
          <h2>Alunos</h2>
          <button onClick={() => navigate("/create-student")}>
            Criar Registro
          </button>
        </div>
        <div>
          <ul>
            {students.length === 0 ? (
              <span>Ainda não há estudantes cadastrados</span>
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
        </div>
      </div>
    </div>
  );
};
