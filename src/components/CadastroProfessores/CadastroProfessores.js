import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ProfessorTable from "../ProfessorTable";
import ProfessorForm from "../ProfessorForm";
import {
  getProfessores,
  createProfessor,
  updateProfessor,
  deleteProfessor
//} from "../../api/apiFirebase";
}from "../../api/apiSpringBoot";

import "./CadastroProfessores.css";

Modal.setAppElement("#root");

const CadastroProfessores = () => {
  const [professores, setProfessores] = useState([]);
  const [editingProfessor, setEditingProfessor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfessores();
      setProfessores(data);
    };

    fetchData();
  }, []);

  const handleAddOrUpdate = async (professor) => {
    try {
      if (editingProfessor) {
        const updatedProfessor = await updateProfessor(editingProfessor.cpf,professor);
        setProfessores(
          professores.map((p) =>
            p.cpf === editingProfessor.cpf ? updatedProfessor : p
          )
        );
        setEditingProfessor(null);
      } else {
        const newProfessor = await createProfessor(professor);
        if (newProfessor) {
          setProfessores([...professores, newProfessor]);
        }
      }
      setIsModalOpen(false);
      setErrorMessage(null); // Limpe o erro se a operação for bem-sucedida
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleDelete = async (cpf) => {
    const confirmDelete = window.confirm(
      "Você tem certeza de que deseja excluir este professor?"
    );
    if (confirmDelete) {
      await deleteProfessor(cpf);
      setProfessores(professores.filter((p) => p.cpf !== cpf));
    }
  };

  const handleEdit = (professor) => {
    setEditingProfessor(professor);
    setIsModalOpen(true);
  };

  return (
    <div className="cadastro-professores">
      <h1 className="title">Cadastro de Professores</h1>

      <button className="add-btn" onClick={() => setIsModalOpen(true)}>
        Adicionar Professor
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Adicionar Professor"
      >
        <ProfessorForm
          onSubmit={handleAddOrUpdate}
          professor={editingProfessor}
        />
        <button className="close-btn" onClick={() => setIsModalOpen(false)}>
          Fechar
        </button>
      </Modal>

      <ProfessorTable
        professores={professores}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CadastroProfessores;
