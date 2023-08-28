// src/components/ProfessorTable.js

import React from 'react';
import './ProfessorTable.css';

const ProfessorTable = ({ professores, onEdit, onDelete }) => {
    if (!professores || professores.length === 0) {
        return <p>Nenhum professor encontrado.</p>;
    }

    return (
        <table className="professor-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sexo</th>
                    <th>Idade</th>
                    <th>CPF</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {professores.map(professor => (
                    <tr key={professor.id}>
                        <td>{professor.nome}</td>
                        <td>{professor.sexo}</td>
                        <td>{professor.idade}</td>
                        <td>{professor.cpf}</td>
                        <td>
                            <button onClick={() => onEdit(professor)}>Editar</button>
                            <button onClick={() => onDelete(professor.cpf)}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProfessorTable;