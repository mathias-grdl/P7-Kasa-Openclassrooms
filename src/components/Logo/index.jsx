import "./index.css";
import { Link } from "react-router-dom";

function Logo(logoImg) {
  return (
    <Link to="/">
      <img src={logoImg} alt="Logo kasa" />
    </Link>
  );
}

export default Logo;
