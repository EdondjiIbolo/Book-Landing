import { useState } from "react";
import Banner from "./Banner";
import { Hamburguer } from "./Icons";
import "./header.css";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const classname = menu ? "nav show" : "nav";
  const handleClick = () => setMenu(!menu);
  return (
    <main className="main-header">
      <header className="header">
        <picture>
          <img src="./assets/logo-green.svg" alt="" />
        </picture>
        <nav className={classname}>
          <ul className="menu">
            <li className="menu__item">
              <a className="menu-link" href="#">
                Product
              </a>
            </li>
            <li className="menu__item">
              <a className="menu-link" href="#">
                About
              </a>
            </li>
            <li className="menu__item">
              <a className="menu-link" href="#">
                Blog
              </a>
            </li>
          </ul>
          <a href="#" className="link rounded-3xl">
            Log in
          </a>
        </nav>
        <div className="toggle-menu text-white" onClick={handleClick}>
          <Hamburguer />
        </div>
      </header>
      <Banner />
    </main>
  );
}
