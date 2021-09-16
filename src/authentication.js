import React, { useEffect, useState } from "react";
import history from "./Utilities/history";
import Home from "./Pages/Home/home";

const withAuth = (Component) => {
  const Auth = (props) => {
    const [login, isLogin] = useState(false);
    const [loading, isLoading] = useState(true);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        isLogin(true);
        isLoading(false);
      } else {
        isLoading(false);
      }
    }, []);

    if (login && !loading) {
      return <Component {...props} />;
    } else if (!login && !loading) {
      history.push("/dashboard");
      return <Home />;
    } else return "";
  };
  return Auth;
};

export default withAuth;
