import React from 'react';
import {shoes} from './GlobalContext';
import { Link } from 'react-router-dom';

function ProductHome() {
    const shoeList = shoes;
    return (
        <ul>
            {Object.entries(shoeList).map(([slug, {name, img}]) => (<li key={slug}>
                <Link to={`/products/${slug}`}>
                <h2>{name}</h2>
                <img src={img} alt={slug} title={name} height="400px" width="400px"/>
                </Link>
            </li>))}
        </ul>
    )
}

export default ProductHome;