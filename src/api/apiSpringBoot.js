// src/api/professoresAPI.js

import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Ajuste para a URL da sua API
//const API_URL = 'http://192.168.0.112:8080'; // Ajuste para a URL da sua API ficar disponível na rede local

export const getProfessores = async () => {
  try {
    const response = await axios.get(`${API_URL}/professores/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    return [];
  }
};

export const createProfessor = async (professor) => {
  try {
    const response = await axios.post(`${API_URL}/professores/`, professor);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar professor:", error);
    return null;
  }
};

export const updateProfessor = async (id, professor) => {
  try {
    const response = await axios.put(`${API_URL}/professores/${id}`, professor);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar professor:", error);
    return null;
  }
};

export const deleteProfessor = async (cpf) => {
  try {
    await axios.delete(`${API_URL}/professores/${cpf}`);
    return true;
  } catch (error) {
    console.error("Erro ao deletar professor:", error);
    return false;
  }
};
