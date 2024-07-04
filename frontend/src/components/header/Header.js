import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-white flex items-center justify-between p-4">
      <div className="w-1/3">
        <Link to="/">
          <img className="rotate" src="/assets/logoNike.png" alt="Logo Nike GTA" />
        </Link>
      </div>

      <div className="w-2/3 flex items-center justify-end">
        <Link to="/identifier" className="mr-4 cursor-pointer text-white">S'identifier</Link>
        <div className="cart-icon h-8">
          <img src="/assets/cart.png" alt="Cart" className="h-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
