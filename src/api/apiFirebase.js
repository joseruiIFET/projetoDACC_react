import { db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

export const getProfessores = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "professores"));
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
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