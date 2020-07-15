import React from 'react';
import { Outlet } from 'react-router';

function Products() {
    return (
        <div>
            <h1 align="center">Upcoming Launch</h1><hr/>
            <Outlet/>
        </div>
    )
}

export default Products;