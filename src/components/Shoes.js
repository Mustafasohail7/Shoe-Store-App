import React from 'react';
import {shoes} from './GlobalContext';
import {useParams} from 'react-router-dom';
import styles from './Shoes.module.css';

function Shoes() {
    const {shoeID} = useParams()
    const shoeList = shoes[shoeID]
    console.log(shoeID)
    if(!shoeList) {
        return (
        <div>
            Not Found
        </div>
        )
    }
    const {name, img, price, launchDate} = shoeList
    return (
        <div className={styles.shoe}>
            <h1>{name}</h1>
            <h2>Coming Out On {launchDate}!</h2>
            <img src={img} alt={name} title={name} width="400px" height="400px"/>
            <h2>{price}</h2>
            <button className={styles.btn}>Buy Now</button> 
        </div>
    )
}

export default Shoes;