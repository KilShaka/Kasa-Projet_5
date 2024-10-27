import logo from "../../assets/images/logos/logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img className="navbar__logo" src={logo} alt="logo" />
      </NavLink>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
