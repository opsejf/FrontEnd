import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Wrongmove__1_-removebg-preview.png';

function navFunction() {
  let x = document.getElementById("navBar");
  let y = document.getElementById("layoutHeader");
  if (x.className === "navBar") {
    x.className += " responsive";
    y.className += " responsive"
  } else {
    x.className = "navBar"
    y.className = "layoutHeader"
  }
  }


const Navbar = () => {
  return (
    <nav className='navBar' id='navBar'>
        <li>
            <div className="img-container"><img src={Logo}/></div>
        </li>
        <li href="javascript:void(0);" class="icon" onClick={navFunction}><i class="fa fa-bars"></i></li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/register-seller">Register Seller</Link>
        </li>
        <li>
          <Link to="/register-buyer">Register Buyer</Link>
        </li>
        <li>
          <Link to="/register-property">Register Property</Link>
        </li>
        <li>
          <Link to="/properties/all">Properties</Link>
        </li>
        <li>
            <Link to="/about-us">About us</Link>
        </li>
        <li>
            <Link to="/sign-in">Sign in</Link>
        </li>
    </nav>
  )
}

export default Navbar;