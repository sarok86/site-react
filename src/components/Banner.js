import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner.png.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt='logo' />
            <div className={styles.textContainer}>
                <h1>Sarok</h1>
                <p>
                    I am learning <span>React.js</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;