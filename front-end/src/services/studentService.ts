import axios from "axios";
import { IStudent } from "../utils/interfaces";

const API_URL = "http://localhost:3000";

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/students`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar estudantes:", error);
    throw new Error("Erro ao buscar estudantes");
  }
};

export const createStudent = async (data: IStudent) => {
  try {
    const response = await axios.post(`${API_URL}/students`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao criar estudante:", error);
    throw new Error("Erro ao criar estudante");
  }
};

export const deleteStudent = async (studentId: string) => {
  try {
    const response = await axios.delete(
      `${API_URL}/students/delete/${studentId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar estudante:", error);
    throw new Error("Erro ao deletar estudante");
  }
};
