import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import MovieDetail from './pages/MovieDetail';
import MoviesGenre from './pages/MoviesGenre';
import SearchResults from './pages/SearchResults';

import './css/style.css';


const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
          <Route path="/moviesgenre" element={<MoviesGenre />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
reportWebVitals();