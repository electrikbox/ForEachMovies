import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import Navigation from './Navigation';


/**
 * Header component.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="App-header">
      <div className='logo-searchbar'>
        <a href="/"><img src="/logo.svg" className="App-logo" alt="logo" /></a>
        {!isHomePage && (
          <div className='search-bar'>
            <img className="search-logo" src="./search.svg" alt="search" />
            <SearchBar />
          </div>
        )}
        <Navigation />
      </div>
    </header>
  );
}

export default Header;