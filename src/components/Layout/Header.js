import { Fragment } from "react";

import classes from "./Header.module.css";
import donutsImage from "../../assets/donuts.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Donut King</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={donutsImage} alt="Scrumptious donuts!" />
      </div>
    </Fragment>
  );
}

export default Header;
