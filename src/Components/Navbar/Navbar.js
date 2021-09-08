import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { forgotPassword, Signin, Signup as Register } from "../../actions/auth";
import { connect } from "react-redux";
import logo from "../../static/icons/LOGO.png";

import "./Navbar.css";

const Navbar = (props) => {
  const [openRegistrationModal, setRegistrationModal] = useState(false);
  const [forgotPasswordvar, setForgotPassword] = useState(false);
  const authenticated = useSelector((state) => state?.isAuthenticated);
  const handleLoginClose = () => {
    props.setLoginModal(false);
  };
  const handleForgotPassword = () => {
    setForgotPassword(false);
  };
  const handleRegistrationClose = () => {
    setRegistrationModal(false);
  };
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [Signup, setSignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
  });
  const dispatch = useDispatch();
  const log = async (e) => {
    e.preventDefault();
    const data = await props.Signin(Login, () => props.setLoginModal(false));
    if (data !== null) {
      window.location.href = "/dashboard";
    }
  };
  const register = async (e) => {
    e.preventDefault();
    const data = await props.Register(Signup, () => props.setLoginModal(false));
    if (data !== null) {
      window.location.href = "/dashboard";
    }
  };
  const forgot = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(Login.email));
    handleForgotPassword();
  };
  useEffect(() => {
    handleRegistrationClose();
  }, [authenticated]);
  return (
    <>
      <React.Fragment>
        {/* Login Modal Form */}
        <Modal open={forgotPasswordvar} onClose={handleForgotPassword}>
          <div className="Modal">
            <div className="modal__heading_logo">
              <img
                height="35px"
                className="logo"
                width="35px"
                src={logo}
                alt="LOGO"
              />
            </div>
            <form onSubmit={forgot} className="modal__form">
              <input
                required
                type="email"
                placeholder="Email"
                className="modal__form_input"
                onChange={(e) => {
                  Login.email = e.target.value;
                  setLogin(Login);
                }}
              />
              <br />
              <input
                required
                className="login__btn"
                type="submit"
                value="SEND MAIL"
              ></input>
              <p>
                <span
                  onClick={() => [
                    props.setLoginModal(true),
                    handleForgotPassword(),
                  ]}
                >
                  Go Back
                </span>
              </p>
            </form>
          </div>
        </Modal>

        <Modal open={props.openLoginModal} onClose={handleLoginClose}>
          <div className="Modal">
            <div className="modal__heading_logo">
              <img
                height="35px"
                className="logo"
                width="35px"
                src={logo}
                alt="LOGO"
              />
            </div>
            <form onSubmit={log} className="modal__form">
              <input
                required
                type="email"
                placeholder="Email"
                className="modal__form_input"
                onChange={(e) => {
                  Login.email = e.target.value;
                  setLogin(Login);
                }}
              />
              <input
                required
                type="password"
                placeholder="Password"
                className="modal__form_input"
                onChange={(e) => {
                  Login.password = e.target.value;
                  setLogin(Login);
                }}
              />
              <br />
              <input
                required
                className="login__btn"
                type="submit"
                value="LOGIN"
              ></input>
            </form>
            <p>
              <span
                style={{ fontSize: "0.7rem" }}
                onClick={() => [setForgotPassword(true), handleLoginClose()]}
              >
                Forgot Passsword?
              </span>
            </p>
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
            <div className="modal__heading_logo">
              <img
                height="35px"
                className="logo"
                width="35px"
                src={logo}
                alt="LOGO"
              />
            </div>
            <form onSubmit={register} className="modal__form">
              <input
                required
                type="text"
                placeholder="First Name"
                className="modal__form_input"
                onChange={(e) => {
                  Signup.firstName = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="modal__form_input"
                onChange={(e) => {
                  Signup.lastName = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="modal__form_input"
                onChange={(e) => {
                  Signup.email = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                required
                type="password"
                placeholder="Password"
                className="modal__form_input"
                onChange={(e) => {
                  Signup.password = e.target.value;
                  setSignup(Signup);
                }}
              />
              <input
                required
                type="password"
                placeholder="Re-type Password"
                className="modal__form_input"
                onChange={(e) => {
                  Signup.confirmPassword = e.target.value;
                  setLogin(Login);
                }}
              />
              <br />
              <input
                required
                type="submit"
                className="login__btn"
                value="REGISTER"
              ></input>
            </form>
            <p>
              Already have an{" "}
              <span
                onClick={() => [
                  props.setLoginModal(true),
                  handleRegistrationClose(),
                ]}
              >
                account?
              </span>
            </p>
          </div>
        </Modal>
      </React.Fragment>

      <div
        style={{ margin: "auto", textAlign: "center", marginTop: "2rem" }}
        className="signUpBtn2"
      >
        {authenticated ? (
          <button className="special2">Logout</button>
        ) : (
          <button
            className="special2"
            onClick={() => props.setLoginModal(true)}
          >
            Sign Up / Sign In
          </button>
        )}
      </div>

      <div className="nav__bar">
        <img
          height="50px"
          width="50px"
          alt="LOGO"
          className="logo"
          src={logo}
        />
        <ul className="nav__bar__options">
          <a href="#about" className="link__style">
            <li className="nav__bar__option">About</li>
          </a>
          <a href="#features" className="link__style">
            <li className="nav__bar__option">Features</li>
          </a>
          <a href="#contact" className="link__style">
            <li className="nav__bar__option">Contact</li>
          </a>
          <a href="#news" className="link__style">
            <li className="nav__bar__option">News</li>
          </a>
          {authenticated ? (
            <button>Logout</button>
          ) : (
            <button onClick={() => props.setLoginModal(true)}>
              Sign Up / Sign In
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default connect(null, { Signin, Register })(Navbar);
