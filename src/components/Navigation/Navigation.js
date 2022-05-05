import { NavLink } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <header className="header">
      <nav className="header_nav">
        <NavLink exact to="/" className="link">
          Main
        </NavLink>

        <NavLink to="/price" className="link">
          Price
        </NavLink>

        <NavLink to="/order" className="link">
          Order
        </NavLink>
      </nav>
    </header>
  );
}
