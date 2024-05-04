import "./index.css";
import logo_kasa from "../../components/Logo/index.jsx";
import logoImg from "../../asset/images/logoWhite.svg";

function Header() {
  return (
    <footer>
      {logo_kasa(logoImg)}
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Header;
