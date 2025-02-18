const Header = () => {
  return (
    <header>
      <h1><a href="/">&#123;Finsweet</a></h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact us</a></li>
        <li><a href="/"><div className="sub">Subscribe</div></a></li>
      </ul>
    </header>
  );
};

export default Header;
