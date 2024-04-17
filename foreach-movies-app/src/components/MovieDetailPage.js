import React from 'react';
import { useSelector } from 'react-redux';


const MovieDetail = () => {
  const movie = useSelector((state) => state.movieById);

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
      </div>
    </main>
  );
};

export default MovieDetail;
