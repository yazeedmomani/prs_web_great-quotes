import css from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={css.header}>
      <div className={css.logo}>Great Quotes</div>
      <nav className={css.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              activeClassName={css.active}>
              All Quotes
            </NavLink>
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
