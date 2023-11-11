import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Imposta l'autenticazione a false dopo il logout
    setIsAuthenticated(false);
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    getMovies();
  }, [isAuthenticated]);

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
            <Route
              path="/Reviews/:movieId"
              element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}
            />
          </Route>
        ) : (
          <Route path="/" element={<Navigate to="/Login" />} />
        )}

        <Route path="/Login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/Register" element={<Register onLogin={() => setIsAuthenticated(true)} />} />
      </Routes>
    </div>
  );
}

export default App;
