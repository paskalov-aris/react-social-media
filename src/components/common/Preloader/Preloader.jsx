import React from "react";
import preloader from "../../../assets/images/spinner.svg";
import styles from './Preloader.module.css';

const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={styles.preloader} />
        </div>
    );
};

export default Preloader;