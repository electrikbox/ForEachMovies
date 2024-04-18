import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const GenreMenu = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [genres, setGenres] = React.useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', {
      params: {
        api_key: API_KEY,
      }
    })
      .then((response) => {
        setGenres(response.data.genres);
        console.log(response.data.genres);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
        throw new Error('Failed to fetch detail result.');
      });
  }, []);

  const updateURL = (e) => {
    const genreId = e.target.value;
    if (genreId) {
      searchParams.set('genre', genreId);
      searchParams.set('page', '1');
    } else {
      searchParams.delete('genre');
      searchParams.delete('page');
    }
    navigate('/moviesgenre?' + searchParams.toString(), { replace: true });
  }

  return (
    <select name="genre-menu" id="genre-menu" onChange={updateURL}>
        <option value="">Make your choice</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
    </select>
  );
}

export default GenreMenu;
