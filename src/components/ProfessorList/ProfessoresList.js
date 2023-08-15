// src/components/ProfessoresList.js

import React, { useState, useEffect } from 'react';
import ProfessorItem from './ProfessorItem';
import ProfessorForm from '../ProfessorForm';
import { getProfessores, createProfessor, updateProfessor, deleteProfessor } from '../../api/professoresAPI';
import Professor from '../../models/Professor';

const ProfessoresList = () => {
    const [professores, setProfessores] = useState([]);
    const [editingProfessor, setEditingProfessor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfessores();
            setProfessores(data);
        };

        fetchData();
    }, []);

    const handleAddOrUpdate = async (professor) => {
        if (editingProfessor) {
            const updatedProfessor = await updateProfessor(editingProfessor.id, professor);
            setProfessores(professores.map(p => p.id === editingProfessor.id ? updatedProfessor : p));
            setEditingProfessor(null);
        } else {
            const newProfessor = await createProfessor(professor);
            if (newProfessor) {
                setProfessores([...professores, newProfessor]);
            }
        }
    };

    const handleDelete = async (id) => {
        await deleteProfessor(id);
        setProfessores(professores.filter(p => p.id !== id));
    };

    const handleEdit = (professor) => {
        setEditingProfessor(professor);
    };

    return (
        <div className="professores-list">
            <h2>Professores</h2>
            <ProfessorForm
                onSubmit={handleAddOrUpdate}
                professor={editingProfessor}
            />
            {professores.map(professor => (
                <ProfessorItem
                    key={professor.id}
                    professor={professor}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}

export default ProfessoresList;
