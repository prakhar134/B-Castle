import React from 'react';
import './DashNav.css';

const Navbar = (props) => {
  return (
    <>
      <div className="nav__bar__dash__">
        <div>Icon</div>
        <ul className="nav__bar__dash____options">
          <button onClick={() => (window.location.href = '/')}>Logout</button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
