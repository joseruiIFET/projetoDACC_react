// src/components/ProfessoresList.js

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ProfessorItem from "./ProfessorItem";
import ProfessorForm from "./ProfessorForm";

import {
  getProfessores,
  createProfessor,
  updateProfessor,
  deleteProfessor,
} from "../api/professoresAPI";
import ProfessorTable from "./ProfessorTable";

Modal.setAppElement("#root"); // Isso é necessário para acessibilidade

const ProfessoresList = () => {
  const [professores, setProfessores] = useState([]);
  const [editingProfessor, setEditingProfessor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfessores();
      setProfessores(data);
    };

    fetchData();
  }, []);

  const handleAddOrUpdate = async (professor) => {
    if (editingProfessor) {
      const updatedProfessor = await updateProfessor(
        editingProfessor.cpf,
        professor
      );
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
  };

  const handleDelete = async (cpf) => {
    const confirmDelete = window.confirm("Você tem certeza de que deseja excluir este professor?");
    if (confirmDelete) {
        await deleteProfessor(cpf);
        setProfessores(professores.filter(p => p.cpf !== cpf));
    }
  };


  const handleEdit = (professor) => {
    setEditingProfessor(professor);
    setIsModalOpen(true);
  };

  return (
    <div className="professores-list">
      <h2>Professores</h2>
      <button onClick={() => setIsModalOpen(true)}>Adicionar</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Adicionar Professor"
      >
        <ProfessorForm
          onSubmit={handleAddOrUpdate}
          professor={editingProfessor}
        />
        <button class="botao-fechar-modal" onClick={() => setIsModalOpen(false)}>Fechar</button>
      </Modal>     
      <ProfessorTable 
          professores={professores}
          onEdit={handleEdit}
          onDelete={handleDelete}
          />



      {
     /* professores.map((professor) => (
        <ProfessorItem
          key={professor.id}
          professor={professor}
          onDelete={() => handleDelete(professor.id)}
          onEdit={handleEdit}
        />
      ))
    */  
    }

      

    </div>
  );
};

export default ProfessoresList;
