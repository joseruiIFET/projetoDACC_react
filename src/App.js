// src/App.js

import React from 'react';
import './App.css';
import CadastroProfessores from './components/CadastroProfessores';
import ProfessoresList from './components/ProfessoresList';
import ProfessorTable from './components/ProfessorTable';

function App() {
    return (
        <div className="App">
            {/*<ProfessoresList/>*/
            <CadastroProfessores/>
            }
        </div>
    );
}

export default App;
