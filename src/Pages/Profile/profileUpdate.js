import React from "react";
import LoginHead from "../../Components/LoginHead/loginHead";
import Sidebar from "../../Components/Sidebar";
import UserInfo from "../../Components/UserInfo/userInfo";
import "./index.css";

const ProfileUpdate = () => {
  return (
    <>
      <LoginHead />
      <Sidebar />
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingottom: "25px",
        }}
        className="main_display"
      >
        <UserInfo update={true} />
      </div>
    </>
  );
};

export default ProfileUpdate;
