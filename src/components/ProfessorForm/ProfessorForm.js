// src/components/ProfessorForm.js
import "./ProfessorForm.css";
import React, { useState, useEffect } from "react";
import Professor from "../../models/Professor";
import { handleImageUpload } from '../../api/apiFirebase';

const ProfessorForm = ({ onSubmit, professor }) => {
  const [profData, setProfData] = useState(professor || new Professor());
  const [imageFile, setImageFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleImageUploadAndSubmit = async (e) => {
    e.preventDefault();

    if (imageFile) {
      const imageUrl = await handleImageUpload(imageFile);
      
      if (imageUrl) {
        // Se o upload da imagem for bem-sucedido, atualize a URL da imagem no estado do professor
        setProfData({ ...profData, imageUrl });
        setImageUploaded(true); // Aqui
      }
    } else {
      // Se nenhum arquivo de imagem foi selecionado, continue apenas com a submissão dos dados do professor
      onSubmit(profData);
    }
  };


useEffect(() => {
  if (profData.imageUrl && imageUploaded) {
      onSubmit(profData);
      setImageUploaded(false); // Reset the flag
  }
}, [profData.imageUrl]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, chamamos a função handleImageUploadAndSubmit
    handleImageUploadAndSubmit(e);
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
          onChange={(e) =>
            setProfData({ ...profData, idade: parseInt(e.target.value) })
          }
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

      <label>
        Foto do Professor:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>

      <button type="submit">{professor ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
};

export default ProfessorForm;
