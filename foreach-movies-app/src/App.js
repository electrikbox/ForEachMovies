import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import Movies from "./components/Movies";
import MovieDetail from './components/MovieDetailPage';
import MoviesGenre from './components/MoviesGenre';
import SearchResults from './components/SearchResultsPage';
import ErrorPage from './components/ErrorPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviedetail/:id" element={<MovieDetail />} />
            <Route path="/moviesgenre" element={<MoviesGenre />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/search" element={<SearchResults />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
