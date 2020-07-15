import React from 'react';
import Home from './components/Home'
import Products from './components/Products'
import {Route, Routes, Link} from 'react-router-dom';
import ProductHome from './components/ProductHome';
import Shoes from './components/Shoes';
import styles from './App.module.css';


function App() {
  return (
    <div>
      <nav>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/products" className={styles.link}>Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Products/>}>
          <Route path="/" element={<ProductHome/>}/>
          <Route path=":shoeID" element={<Shoes/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      Page Not Found
    </div>
  )
}

export default App;
