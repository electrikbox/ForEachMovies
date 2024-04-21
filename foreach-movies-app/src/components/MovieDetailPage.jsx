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
        <div className='main'>
          <div className='movie-detail'>
            <img className='detail-pic'
              src={data.poster_path ? `https://image.tmdb.org/t/p/w400${data.poster_path}` : '/no-poster.jpg'}
              alt={data.title}
            />
            <div className='detail-content'>
              <div className='detail-top'>
                <h2 className='detail-title'>{data.title}</h2>
                <div className='detail-infos'>
                  <h3>Original title :</h3>
                  <p>{data.original_title}</p>
                </div>
                <div className='detail-infos'>
                  <h3>Release date :</h3>
                  <p>{data.release_date}</p>
                </div>
                <div className='detail-infos'>
                  <h3>Note:</h3>
                  {data.vote_count > 0 ? <p>{Math.round(Number(data.vote_average))}/10</p> : <p>no note</p>}
                </div>
                <h3>Overview:</h3>
                <p className='overview'>{data.overview || "No overview"}</p>
              </div>
              <div className='detail-bottom'>
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
          </div>
        </div>}
    </main>
  );
};

export default MovieDetail;
