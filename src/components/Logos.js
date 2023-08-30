import React from 'react';
import styles from "./Logos.module.css";
import Apple from "../images/apple.png";
import Samsung from "../images/samsung.jpg";
import Xiaomi from "../images/xiaomi.jpg";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={Apple} alt='apple'/>
                <img src={Samsung} alt='samsung'/>
                <img src={Xiaomi} alt='xiaomi'/>
            </div>
        </div>
    );
};

export default Logos;