function Header() {
  const headerStyle = {
    borderBottom: "1px solid #ddd",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <a href="/">
          <h1>Mini Projects</h1>
        </a>

        <nav>
          <ul>
            <li>
              <a href="/">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
