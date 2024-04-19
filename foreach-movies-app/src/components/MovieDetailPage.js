import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${param.id}`, {
      params: {
        api_key: API_KEY,      }
    })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
        throw new Error('Failed to fetch detail result.');
      });
  }, []);

  return (
    <main>
      <div className='movie-detail'>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : '/no-poster.jpg'}
          alt={movie.title}
        />
        <h2>{movie.original_title}</h2>
        <h3>({movie.title})</h3>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}/10</p>
        <p>{movie.release_date}</p>
        <p>Genres:</p>
        {movie.genres && (
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </main>
  );
};

export default MovieDetail;
