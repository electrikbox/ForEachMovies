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
        <h1>Home</h1>
        <div className='search-bar-home'>
          <SearchBar />
        </div>
      </div>
    </main>
  );
};

export default Home;
