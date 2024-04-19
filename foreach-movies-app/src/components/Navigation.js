const Navigation = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/moviesgenre">Genres</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
