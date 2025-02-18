const Logo = () => {
  return (
    <div className="logo">
      <ul>
        <li><img src={`${process.env.PUBLIC_URL}/featured.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/logo1.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/logo2.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/logo3.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/logo4.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/logo5.png`} /></li>
      </ul>
    </div>
  );
};

export default Logo;
