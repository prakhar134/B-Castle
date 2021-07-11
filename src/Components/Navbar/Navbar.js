import React, { useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { Signin, Signup as Register } from '../../actions/auth';
import { connect } from 'react-redux';

import './Navbar.css';

const Navbar = (props) => {
  const [openLoginModal, setLoginModal] = useState(false);
  const [openRegistrationModal, setRegistrationModal] = useState(false);
  const authenticated = useSelector((state) => state?.isAuthenticated);
  const handleLoginClose = () => {
    setLoginModal(false);
  };
  const handleRegistrationClose = () => {
    setRegistrationModal(false);
  };
  const [Login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [Signup, setSignup] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    isAdmin: false,
  });
  const log = async (e) => {
    e.preventDefault();
    const data = await props.Signin(Login);
    if (data !== null) {
      window.location.href = '/dashboard';
    }
  };
  const register = async (e) => {
    e.preventDefault();
    const data = await props.Register(Signup);
    if (data !== null) {
      window.location.href = '/dashboard';
    }
  };
  useEffect(() => {
    handleRegistrationClose();
  }, [authenticated]);
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
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  Login.email = e.target.value;
                  setLogin(Login);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  Login.password = e.target.value;
                  setLogin(Login);
                }}
              />
              <button className="login__btn" onClick={log}>
                LOGIN
              </button>
            </form>
            <p>
              Looking to{' '}
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
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                  Signup.firstName = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  Signup.lastName = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  Signup.email = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  Signup.password = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                type="password"
                placeholder="Re-type Password"
                onChange={(e) => {
                  Signup.confirmPassword = e.target.value;
                  setLogin(Login);
                }}
              />
              <button className="login__btn" onClick={register}>
                REGISTER
              </button>
            </form>
            <p>
              Already have an{' '}
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
          <a href="#solution" className="link__style">
            <li className="nav__bar__option">Solution</li>
          </a>
          <a href="#features" className="link__style">
            <li className="nav__bar__option">Features</li>
          </a>
          <a href="#news" className="link__style">
            <li className="nav__bar__option">News</li>
          </a>
          <a href="#about" className="link__style">
            <li className="nav__bar__option">About</li>
          </a>

          <a href="#contact" className="link__style">
            <li className="nav__bar__option">Contact</li>
          </a>
          {authenticated ? (
            <button>Logout</button>
          ) : (
            <button onClick={() => setLoginModal(true)}>
              Sign Up/ Sign In
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default connect(null, { Signin, Register })(Navbar);
