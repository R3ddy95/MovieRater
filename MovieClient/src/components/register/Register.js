import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../api/axiosConfig';
import { RotatingLines } from "react-loader-spinner";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Pulisci l'errore del campo quando l'utente inizia a modificare il campo
    setFieldErrors({
      ...fieldErrors,
      [name]: "",
    });

    // Validazione della password
    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const isValidPassword = passwordRegex.test(value);

      if (!isValidPassword) {
        setFieldErrors({
          ...fieldErrors,
          [name]: "Password must be at least 8 characters long and contain at least one number.",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione per campi vuoti
    if (!formData.username || !formData.email || !formData.password) {
      setFieldErrors({
        username: formData.username ? "" : "Username is required.",
        email: formData.email ? "" : "Email is required.",
        password: formData.password ? "" : "Password is required.",
      });
      return;
    }

    // Verifica dell'errore dell'email
    if (emailError) {
      return;
    }

    // Verifica dell'errore della password
    if (fieldErrors.password) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/api/users/register", formData);

      window.alert("Registration was successful!");

      // Se la registrazione ha successo, reindirizza l'utente alla pagina di login o a una pagina di conferma
      navigate("/login");
    } catch (error) {
      // Gestisci gli altri tipi di errori, ad esempio mostrando un messaggio generico
      setError("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="register">
        <div className="cardL">
          <div className="up">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username *"
                value={formData.username}
                onChange={handleChange}
              />
              {fieldErrors.username && (
                <div className="error-message">
                  <p style={{ color: "red" }}>{fieldErrors.username}</p>
                </div>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
              />
              {fieldErrors.email && (
                <div className="error-message">
                  <p style={{ color: "red" }}>{fieldErrors.email}</p>
                </div>
              )}
              {emailError && (
                <div className="error-message">
                  <p style={{ color: "red" }}>{emailError}</p>
                </div>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
              />
              {fieldErrors.password && (
                <div className="error-message">
                  <p style={{ color: "red" }}>{fieldErrors.password}</p>
                </div>
              )}
              {error && (
                <div className="error-message">
                  <p style={{ color: "red" }}>{error}</p>
                </div>
              )}
              <button className="registerButton" type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
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
            <h3>Do you have already an Account?</h3>
            <Link to="/login" style={{ width: '100%', textDecoration: "none" }}>
              <button className="loginButton">Login</button>
            </Link>
            <p>After login you will have access to all functions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;