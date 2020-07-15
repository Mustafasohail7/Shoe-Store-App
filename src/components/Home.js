import React from 'react';
import styles from './Home.module.css';
import CountUp from 'react-countup';

function Home() {
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>Upto <CountUp start={0} end={130000} duration={1.5} separator=","/> units sold</h1>
        </div>
    )
}

export default Home;