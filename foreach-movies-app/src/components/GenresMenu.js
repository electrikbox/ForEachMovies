import { useNavigate, useSearchParams } from 'react-router-dom';
import { getMoviesGenres } from "../utils/requests";
import { useQuery } from 'react-query';


const GenreMenu = () => {
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
    <div className="select">
      <select className="format" name="genre-menu" id="genre-menu" onChange={updateURL}>
        <option value="" disabled>Choose a genre...</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreMenu;
