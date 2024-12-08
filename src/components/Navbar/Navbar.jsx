// import React from 'react';

// import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="bg-black text-white sticky top-0 h-16 flex items-center justify-between px-32">
        <h1 className="font-bold">GadgetBD</h1>
        <div>
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/cart">Cart</ActiveLink>
          <ActiveLink to="/wishList">Wish List</ActiveLink>
          <ActiveLink to="/sign-up">Sign Up</ActiveLink>
        </div>
      </nav>
    );
};

export default Navbar;