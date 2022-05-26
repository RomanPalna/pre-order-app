import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  let classname = "hamburger";
  if (menuActive) {
    classname += " active";
  }

  return (
    <nav className="navbar container">
      <Link to="#" className="logo">
        LOGO
      </Link>

      <button type="button" className={classname} onClick={handleClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {menuActive ? (
        <div className="menu">
          <ul className="list">
            <li>
              <NavLink exact="true" to="/" className="link">
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink to="/price" className="link">
                Алкогольна карта
              </NavLink>
            </li>
            <li>
              <NavLink to="/order" className="link">
                Коктейлі
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
