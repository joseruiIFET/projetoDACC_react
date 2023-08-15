// src/components/ProfessorForm.js
import './ProfessorForm.css'
import React, { useState } from 'react';
import Professor from '../../models/Professor';


const ProfessorForm = ({ onSubmit, professor }) => {
    const [profData, setProfData] = useState(professor || new Professor());

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(profData);
        setProfData(new Professor());
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    placeholder="Nome"
                    value={profData.nome}
                    onChange={(e) => setProfData({ ...profData, nome: e.target.value })}
                    required
                />
            </label>

            <label>
                Sexo:
                <input
                    type="text"
                    placeholder="Sexo"
                    value={profData.sexo}
                    onChange={(e) => setProfData({ ...profData, sexo: e.target.value })}
                    required
                />
            </label>

            <label>
                Idade:
                <input
                    type="number"
                    placeholder="Idade"
                    value={profData.idade}
                    onChange={(e) => setProfData({ ...profData, idade: parseInt(e.target.value) })}
                    min="0"
                />
            </label>

            <label>
                CPF:
                <input
                    type="text"
                    placeholder="CPF"
                    value={profData.cpf}
                    onChange={(e) => setProfData({ ...profData, cpf: e.target.value })}
                />
            </label>

            

            <button type="submit">{professor ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
}

export default ProfessorForm;
