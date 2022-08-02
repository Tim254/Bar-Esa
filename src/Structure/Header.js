import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import drinksImage from "../assetsUI/drinksImage.jpg";

import classes from "./Header.module.css";

import CartButton from "./CartButton";
import AboutUs from "../SitePages/AboutUs";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          Bar<span>Esa</span>
        </h1>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <NavLink href="#">About</NavLink>   
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <CartButton onClick={props.onShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={drinksImage} alt="bar counter full of drinks"></img>
      </div>
    </Fragment>
  );
};
export default Header;
