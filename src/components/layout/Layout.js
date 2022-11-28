import css from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={css.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
