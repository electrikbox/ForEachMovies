import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import MovieDetail from './components/MovieDetailPage';
import MoviesGenre from './components/MoviesGenre';
import SearchResults from './components/SearchResultsPage';
import ErrorPage from './components/ErrorPage';


const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
          <Route path="/moviesgenre" element={<MoviesGenre />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
