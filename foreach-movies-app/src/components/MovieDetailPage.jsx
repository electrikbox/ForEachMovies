import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovieDetail } from '../utils/requests';
import { useEffect } from 'react';


/**
 * Renders the movie detail page.
 *
 * @returns {JSX.Element} The movie detail page component.
 */
const MovieDetail = () => {
  const param = useParams();
  const navigate = useNavigate();

  // Fetches the movie detail and stores the result in the `data` state variable.
  const { status, data, error, refetch, isFetching } = useQuery(
    ['movies'],
    () => getMovieDetail(param.id),
    {
      staleTime: 60_000,
      cacheTime: 60_000,
      enabled: true,
    }
  );

  useEffect(() => {
    refetch()
  }, [param.id]);

  if (error) return <p className='error'>An error has occurred</p>;

  return (
    <main>
      {status === 'loading' || isFetching ? <div className="loader"></div> :
        <>
          <h2 className='detail-title'>{data.title}</h2>
          <p className='original-title'><strong>Original title :</strong> {data.original_title}</p>
          <div className='movie-detail'>
            <img className='detail-pic'
              src={data.poster_path ? `https://image.tmdb.org/t/p/w400${data.poster_path}` : '/no-poster.jpg'}
              alt={data.title}
            />
            <div className='detail-content'>
              <p className='overview'>{data.overview}</p>
              <p>{Math.round(Number(data.vote_average))}/10</p>
              <p>{data.release_date}</p>
              {data.genres && (
                <ul className='genres'>
                  {data.genres.map((genre) => (
                    <a href={`/moviesgenre?genre=${genre.id}&page=1`}><li key={genre.id}>{genre.name}</li></a>
                  ))}
                </ul>
              )}
              <button className="back" onClick={() => navigate(-1)}>Go back</button>
            </div>
          </div>
        </>}
    </main>
  );
};

export default MovieDetail;
