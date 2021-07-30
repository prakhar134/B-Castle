import React, { useState } from 'react'
import { useDispatch  } from 'react-redux';
import { logoutUser, Signin } from '../../actions/auth';
import toastifier from "toastifier";
import "toastifier/dist/toastifier.min.css";

const AdminLogin = () => {

    const [Login, setLogin] = useState({
      email: '',
      password: '',
    });

    const dispatch = useDispatch()

    const log = async (e) => {
      e.preventDefault();
      const data = await dispatch(Signin(Login));
      if (data?.isAdmin) {
        window.location.href = '/adminPanel';
      }
      else{
        toastifier("Not registered admin", { type: "error" })
        dispatch(logoutUser())
      }
    };

    return (
        <div className="Modal">
            <div className="modal__heading">
                <p>Admin Login</p>
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
                <br />
                <button className="login__btn" onClick={log}>
                    LOGIN
                </button>
            </form>
        </div>
    )
}

export default AdminLogin
