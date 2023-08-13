// src/components/ProfessorTableRow.js

import React from 'react';

const ProfessorTableRow = ({ professor, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{professor.nome}</td>
            <td>{professor.sexo}</td>
            <td>{professor.idade}</td>
            <td>{professor.cpf}</td>
            <td>
                <button onClick={() => onEdit(professor)}>Editar</button>
                <button onClick={() => onDelete(professor.cpf)}>Deletar</button>
            </td>
        </tr>
    );
}

export default ProfessorTableRow;
