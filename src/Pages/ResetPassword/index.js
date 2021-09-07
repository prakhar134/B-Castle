import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../static/icons/LOGO.png";
import toastifier from "toastifier";
import "toastifier/dist/toastifier.min.css";
import { resetPassword } from "../../actions/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch = useDispatch();

  const funHandle = (e) => {
    e.preventDefault();
    if (confirm !== password)
      return toastifier("Passwords dont match", { type: "error" });
    if (confirm.length < 8)
      return toastifier("Passwords need atleast 8 characters", {
        type: "error",
      });
    const url =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    dispatch(resetPassword({ email, password }, url));
  };

  return (
    <div className="Modal">
      <div className="logo">
        <img
          height="35px"
          width="35px"
          className="modal__heading_logo"
          src={logo}
          alt="LOGO"
        />
      </div>
      <form onSubmit={funHandle} className="modal__form">
        <input
          required
          type="email"
          placeholder="Enter email to confirm"
          className="modal__form_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Enter new Password"
          className="modal__form_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Enter confirm Password"
          value={confirm}
          className="modal__form_input"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <br />
        <button className="login__btn" type="submit">
          RESET PASSWORD
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
