import { useState } from "react";
import Banner from "./Banner";
import { Hamburguer } from "./Icons";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const classname = menu ? "nav show" : "nav";
  const handleClick = () => setMenu(!menu);
  const navItems = [
    { name: "Products", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <main className="main-header">
      <header className="header">
        <picture>
          <img src="./assets/logo-green.svg" alt="" />
        </picture>
        <nav className={classname}>
          <ul className="menu">
            {navItems.map((item, index) => (
              <li className="menu__item" key={index}>
                <NavItem item={item} />
              </li>
            ))}
          </ul>
          <Link to="#" className="link rounded-3xl">
            Log in
          </Link>
        </nav>
        <div className="toggle-menu text-white" onClick={handleClick}>
          <Hamburguer />
        </div>
      </header>
    </main>
  );
}

function NavItem({ item }) {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? "menu-link" : isActive ? "menu-link active" : "menu-link"
      }
      to={item.path}
    >
      {item.name}
    </NavLink>
  );
}
