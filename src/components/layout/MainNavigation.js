import css from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={css.header}>
      <NavLink
        to="/quotes"
        className={css.yaz}>
        <div className={css.logo}>Great Quotes</div>
      </NavLink>
      <nav className={css.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              activeClassName={css.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              activeClassName={css.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
