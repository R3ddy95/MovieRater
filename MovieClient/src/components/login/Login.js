import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from '../../api/axiosConfig';
import { RotatingLines } from "react-loader-spinner";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validazione per campi vuoti
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true); // Imposta lo stato di caricamento a true

      const response = await api.post('/api/users/login', {
        email: email,
        password: password,
      });

      console.log('Login response:', response);

      // Chiamare la funzione onLogin passata da App
      onLogin();

      // Reindirizza l'utente a una pagina dopo il login (puoi modificare il percorso)
      navigate("/");
    } catch (error) {
      // Se l'autenticazione ha avuto esito negativo, mostra un messaggio di errore all'utente.
      if (error.response && error.response.status === 401) {
        setError("User not found or incorrect email, or wrong password.");
      } else {
        setError("An error occurred during login.");
      }
    } finally {
      setLoading(false); // Imposta lo stato di caricamento a false anche in caso di errore
    }
  };

  return (
    <div>
      <div className="login">
        <div className="cardL">
          <div className="up">
            <h1>Login</h1>
            {error && (
              <div className="error-message">
                <p style={{ color: "red" }}>{error}</p>
              </div>
            )}
            <form>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="loginButton" onClick={handleLogin} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            {loading && (
            <div className="loader-container">
                <div className="loader">
                  <RotatingLines strokeColor="#00E0FF" height={100} width={100} />
                </div>
                <p>The server used is free, the first response from the backend API server takes at least 200 seconds, please wait.</p>
              </div>
              )}
          </div>
        </div>
        <div className="cardR">
          <div className="down">
            <h3>Don't you have an Account?</h3>
            <Link to="/register" style={{ width: '100%', textDecoration: "none" }}>
              <button className="registerButton">Register</button>
            </Link>
            <p>After registration you will have access to all functions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

