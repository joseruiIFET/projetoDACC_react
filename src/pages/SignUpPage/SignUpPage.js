import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../../components/Input";
import { MdEmail, MdLock, MdPersonAdd } from "react-icons/md";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom"; 

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate(); 

  const handleSignUp = async (e) => {
    e.preventDefault(); // Previne a ação padrão do formulário
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Conta criada com sucesso!");
      // Redirecione para a página inicial ou outra página após o cadastro bem-sucedido
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Criar Conta</h2>
      
      <form onSubmit={handleSignUp}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<MdEmail size={20} color="#a2c9f5" />}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<MdLock size={20} color="#a2c9f5" />}
          placeholder="Senha"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<MdLock size={20} color="#a2c9f5" />}
          placeholder="Confirmar Senha"
        />
        <button type="submit" onClick={handleSignUp}>Criar Conta</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default SignUpPage;
