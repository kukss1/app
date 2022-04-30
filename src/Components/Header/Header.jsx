import React from "react";
import styles from  "./Header.module.scss";
import logo from "../../Asests/Img/Logo.svg";
import { menu } from "./menu";
import { Link } from "react-router-dom";



const Header = () => {



  return (
    <header>
      <div className={styles.logo}>
        <Link to='/'><img src={logo} alt="Logo" height={50}/></Link>
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, index) => (
            <li kay={`menu item ${index}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button className={styles.loginButton}><a href="/login"> Login</a></button>
          <button className={styles.signUpButton}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
