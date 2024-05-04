import "./index.css";
import logo_kasa from "../../components/Logo/index.jsx";
import Navbar from "../../components/Navbar/index.jsx";
import logoImg from "../../asset/images/logo.svg";

function Header() {
  return (
    <header>
      {logo_kasa(logoImg)}
      <Navbar/>
    </header>
  );
}

export default Header;
