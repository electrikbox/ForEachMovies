import React from 'react';
import { useLocation} from 'react-router-dom';
import SearchBar from './SearchBar';


const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="App-header">
      <a href="/"><img src="/logo.svg" className="App-logo" alt="logo" /></a>
      {!isHomePage && ( <SearchBar /> )}
    </header>
  );
}

export default Header;
