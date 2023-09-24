import { db } from "../firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  writeBatch,
} from "firebase/firestore";


export const getProfessores = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "professores"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    return [];
  }
};

export const createProfessor = async (professor) => {
  try {
    const docRef = await addDoc(collection(db, "professores"), professor);
    return { id: docRef.id, ...professor };
  } catch (error) {
    console.error("Erro ao criar professor:", error);
    return null;
  }
};

export const updateProfessor = async (cpf, professor) => {
  try {
    const q = query(collection(db, "professores"), where("cpf", "==", cpf));
    const querySnapshot = await getDocs(q);
    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
      batch.update(doc.ref, professor);
    });
    await batch.commit();
    console.log("Professor atualizado com sucesso");
    return professor;
  } catch (error) {
    console.error("Erro ao atualizar documentos", error);
    return null;
  }
};

/* Se quisermos fazer direto pelo ID do DOCUMENTO é bem mais simples
export const updateProfessor = async (id, professor) => {
  try {
    // Referência direta ao documento usando o ID fornecido
    const docRef = doc(db, "professores", id);
    
    // Atualiza o documento referenciado
    await updateDoc(docRef, professor);

    console.log("Professor atualizado com sucesso");
    return professor;
  } catch (error) {
    console.error("Erro ao atualizar o professor", error);
    return null;
  }
};*/


export const deleteProfessor = async (cpf) => {
  try {
    const q = query(collection(db, "professores"), where("cpf", "==", cpf));
    const querySnapshot = await getDocs(q);
    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
    console.log("Professor deletado com sucesso");
    return true;
  } catch (error) {
    console.error("Erro ao deletar documentos", error);
    return false;
  }
};

export const handleImageUpload = async (imageFile) => {
  try {
    console.log("Iniciando upload da imagem...");

    const imageRef = ref(getStorage(), `fotoProfessores/${imageFile.name}`);  
    console.log("Referência à imagem criada...");

    const snapshot = await uploadBytesResumable(imageRef, imageFile);
    console.log("Imagem carregada com sucesso...");

    const imageUrl = await getDownloadURL(snapshot.ref);
    console.log("URL de download obtida:", imageUrl);

    return imageUrl;
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return null;
  }
};