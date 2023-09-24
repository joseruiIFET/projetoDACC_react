import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import Input from "../../components/Input";
import { MdEmail, MdLock, MdPersonAdd } from "react-icons/md";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/cadastrar-prof");  // Supondo que a rota para o cadastro de prof seja '/cadastrar-prof'
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirecione para a página inicial ou outra página após o cadastro bem-sucedido
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Verifique seu e-mail para redefinir a senha.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}

      <div className="signup-forgot">
        <Link to="/signup">
          <button className="signup-button" onClick={handleSignUp}>
            <MdPersonAdd size={20} color="#007bff" />
            Criar Conta
          </button>
        </Link>
        <button className="forgot-button" onClick={handleForgotPassword}>
          Esqueci a Senha
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
