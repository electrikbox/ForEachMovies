import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import Navigation from './Navigation';


const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="App-header">
      <div className='logo-searchbar'>
        <a href="/"><img src="/logo.svg" className="App-logo" alt="logo" /></a>
        {!isHomePage && (
          <div className='search-bar'>
            <SearchBar />
          </div>
        )}
        <Navigation />
      </div>
    </header>
  );
}

export default Header;