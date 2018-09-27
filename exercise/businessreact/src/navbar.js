import React from'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
       <div>
           <a href="Home">Home</a>
           <a href="./infor.js">About Us</a>
           <a href="images">Images</a>
           <Link to='./products'>Products</Link>
       </div>
   )
}

export default Navbar;