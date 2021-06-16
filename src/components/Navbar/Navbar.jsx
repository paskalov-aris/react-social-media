import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navBar}>
            <nav className={styles.nav}>
                <div className={styles.item + ' ' + styles.active}>
                    <NavLink to="/profile" activeClassName={styles.activeLink}>Моя страница</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs" activeClassName={styles.activeLink}>Сообщения</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/users" activeClassName={styles.activeLink}>Пользователи</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.activeLink}>Новости</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/music" activeClassName={styles.activeLink}>Музыка</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/settings" activeClassName={styles.activeLink}>Настройки</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;