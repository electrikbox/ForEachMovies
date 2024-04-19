const Navigation = () => {

  const resetStorage = () => {
    window.localStorage.clear();
  }

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li><a href="/" onClick={resetStorage}>Home</a></li>
          <li><a href="/movies" onClick={resetStorage}>Movies</a></li>
          <li><a href="/moviesgenre" onClick={resetStorage}>Genres</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
