import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';


const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="App-header">
      <a href="/"><img src="/logo.svg" className="App-logo" alt="logo" /></a>
      {!isHomePage && (
        <div className='search-bar'>
          <SearchBar />
        </div>
      )}
    </header>
  );
}

export default Header;
