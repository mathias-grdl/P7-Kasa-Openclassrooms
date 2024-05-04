import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
        </li>
        <li>
        <Link to="/apropos" className={location.pathname === "/apropos" ? "active" : ""}>A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
