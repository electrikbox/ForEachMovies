import SearchBar from './SearchBar';


/**
 * Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  return (
    <main>
      <div className='main'>
        <h1>Welcome to ForEach Movies !</h1>
        <div className='search-bar-home'>
          <img className="search-logo" src="./search.svg" alt="search" />
          <SearchBar />
        </div>
      </div>
    </main>
  );
};

export default Home;
