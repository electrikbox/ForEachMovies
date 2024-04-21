import { getMoviesGenres } from "../../utils/requests";
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useSearchParams } from "react-router-dom";


/**
 * Renders a dropdown menu for selecting a movie genre.
 *
 * @param {Function} props.onGenreSelect - The callback function to be called when a genre is selected.
 * @returns {JSX.Element} The GenreMenu component.
 */
const GenreMenu = ({onGenreSelect}) => {
  const [searchParams] = useSearchParams();
  const [selectedYear, setGenre] = useState(searchParams.get('genre') || '');

  // Fetches the movie genres and stores the result in the `data` state variable.
  const { status, data, error } = useQuery(
    ['genre'],
    () => getMoviesGenres()
  );

  // Handles the change event of the genre select input.
  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setGenre(selectedGenre);
    onGenreSelect(selectedGenre)
  }

  if (error) return <p>"An error has occurred"</p>;
  if (status === "loading") return <p>Fetching...</p>;

  return (
    <div className="select">
      <select selected className="format" name="genre-menu" id="genre-menu" onChange={handleGenreChange} value={selectedYear}>
        <option value="" disabled>Choose a genre...</option>
        {data.genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreMenu;
