import { getMoviesGenres } from "../../utils/requests";
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const GenreMenu = ({onGenreSelect}) => {
  const [genre, setGenre] = useState('');
  const navigate = useNavigate();

  const { status, data, error } = useQuery(
    ['genre'],
    () => getMoviesGenres()
  );

  const handleGenre = (e) => {
    onGenreSelect(e.target.value)
    setGenre(e.target.value);
    navigate(`/moviesgenre?genre=${e.target.value}&page=1`);
  }

  if (error) return <p>"An error has occurred"</p>;
  if (status === "loading") return <p>Fetching...</p>;

  return (
    <div className="select">
      <select selected className="format" name="genre-menu" id="genre-menu" onChange={handleGenre} value={genre}>
        <option value="" disabled>Choose a genre...</option>
        {data.genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name} {genre.id}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreMenu;
