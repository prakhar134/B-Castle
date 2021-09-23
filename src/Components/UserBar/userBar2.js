import React from "react";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { doneTrade } from "../../actions/admin";
const UserBar2 = ({ id, name, email, balance, phone }) => {
  const dispatch = useDispatch();
  const del = (id) => {
    dispatch(doneTrade(id));
  };
  return (
    <div className={[style.bar2, style.pointy].join(" ")}>
      <span style={{ minWidth: "120px" }} className={style.name}>
        {name}
      </span>
      <span style={{ minWidth: "200px" }} className={style.email}>
        {email}
      </span>
      <span style={{ minWidth: "200px" }} className={style.email}>
        {phone}
      </span>
      <span style={{ minWidth: "200px" }} className={style.balance}>
        {balance}
      </span>
      <span
        onClick={() => del(id)}
        style={{
          minWidth: "200px",
          fontSize: "1rem",
          cursor: "pointer",
          color: "green",
        }}
      >
        Done
      </span>
    </div>
  );
};

export default UserBar2;
