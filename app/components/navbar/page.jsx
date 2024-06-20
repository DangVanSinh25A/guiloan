// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login" >Login</Link></li>
        <li><Link href="/registers">Register</Link></li>
        <li><Link href="/product">Sinh</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
