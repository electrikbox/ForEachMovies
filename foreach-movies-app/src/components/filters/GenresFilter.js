import { useNavigate, useSearchParams } from 'react-router-dom';
import { getMoviesGenres } from "../../utils/requests";
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';


const GenreMenu = ({onGenreSelect}) => {
  const [selectedGenre, setSelectedGenre] = useState(
    window.localStorage.getItem('genre') || '');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data } = useQuery(
    'genre',
    () => getMoviesGenres(),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  const genres = data ? data.genres : [];

  const handleGenreChange = (event) => {
    window.localStorage.setItem('genre', event.target.value);
    if (window.location.pathname === '/moviesgenre') {
      const selectedGenre = event.target.value;
      setSelectedGenre(selectedGenre);
      onGenreSelect(selectedGenre);
      updateURL(event);
    }
    else {
      const selectedGenre = event.target.value;
      setSelectedGenre(selectedGenre);
      onGenreSelect(selectedGenre);
    }
  };

  const updateURL = (e) => {
    if (window.location.pathname === '/moviesgenre') {
      const genreId = e.target.value;
      searchParams.set('genre', genreId);
      searchParams.set('page', '1');
      navigate('/moviesgenre?' + searchParams.toString(), { replace: true });
    }
  }

  useEffect(() => {
    window.localStorage.setItem('genre', selectedGenre);
  }, [selectedGenre]);



  return (
    <div className="select">
      <select className="format" name="genre-menu" id="genre-menu" onChange={handleGenreChange} value={selectedGenre}>
        <option value="" disabled>Choose a genre...</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreMenu;
