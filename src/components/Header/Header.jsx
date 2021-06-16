import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Logotype from "../../assets/images/logo.png"

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__body}>
                <NavLink className={styles.header__logotype} to="/">
                    <img src={Logotype} className={styles.header__logotype_image} alt="Header Logo"/>
                    <p className={styles.header__logotype_text}>React Social Media</p>
                </NavLink>

                <div className={styles.header__login}>
                    {props.isAuth ? `Ваш логин: ${props.login}` : <NavLink to={"/login"}>Авторизоваться</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;