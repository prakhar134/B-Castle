import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";

const Navbar = () => {
  const [openLoginModal, setLoginModal] = useState(false);
  const [openRegistrationModal, setRegistrationModal] = useState(false);

  const handleLoginClose = () => {
    setLoginModal(false);
  };
  const handleRegistrationClose = () => {
    setRegistrationModal(false);
  };

  return (
    <>
      <React.Fragment>
        {/* Login Modal Form */}
        <Modal open={openLoginModal} onClose={handleLoginClose}>
          <div className="Modal">
            <div className="modal__heading">
              <p>Login</p>
              <CloseIcon onClick={handleLoginClose} />
            </div>
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <form className="modal__form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="login__btn">LOGIN</button>
            </form>
            <p>
              Looking to{" "}
              <span
                onClick={() => [setRegistrationModal(true), handleLoginClose()]}
              >
                create an account?
              </span>
            </p>
          </div>
        </Modal>

        {/* Registration Modal Form */}
        <Modal open={openRegistrationModal} onClose={handleRegistrationClose}>
          <div className="Modal">
            <div className="modal__heading">
              <p>Register</p>
              <CloseIcon onClick={handleRegistrationClose} />
            </div>
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <form className="modal__form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Re-type Password" />
              <button className="login__btn">REGISTER</button>
            </form>
            <p>
              Already have an{" "}
              <span
                onClick={() => [setLoginModal(true), handleRegistrationClose()]}
              >
                account?
              </span>
            </p>
          </div>
        </Modal>
      </React.Fragment>

      <div className="nav__bar">
        <div>Icon</div>
        <ul className="nav__bar__options">
          <li className="nav__bar__option">Solution</li>
          <li className="nav__bar__option">Features</li>
          <li className="nav__bar__option">News</li>
          <a href="#about">
            <li className="nav__bar__option">About</li>
          </a>

          <li className="nav__bar__option">Contact</li>
          <button onClick={() => setLoginModal(true)}>Sign Up/ Sign In</button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
