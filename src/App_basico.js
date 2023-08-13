import React, { useState, useEffect } from 'react';
import './App.css';
import { getProfessores } from './api/professoresAPI';

function App() {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    // Função para buscar os professores
    const fetchProfessores = async () => {
      const data = await getProfessores();
      setProfessores(data);
    };

    fetchProfessores();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Professores</h1>
      <ul>
        {professores.map(prof => (
          <li key={prof.id}>{prof.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;