import React from "react";
import style from "./index.module.css";
import { useHistory } from "react-router";
const UserBar = ({ id, name, email, balance, admin }) => {
  const history = useHistory();
  const goToUser = (id) => {
    history.push(`/admin/user/${id}`);
  };

  return (
    <div
      onClick={() => !admin && goToUser(id)}
      className={[style.bar, !admin && style.pointy].join(" ")}
    >
      <span style={{ minWidth: "120px" }} className={style.name}>
        {name}
      </span>
      <span style={{ minWidth: "200px" }} className={style.email}>
        {email}
      </span>
      <span
        style={{ minWidth: "50px" }}
        className={admin ? style.isAdmin : style.isUser}
      >
        {admin ? "admin" : "user"}
      </span>
      <span
        style={{ minWidth: "150px" }}
        className={[
          style.balance,
          parseInt(balance) < 200 && !admin && style.textRed,
        ].join(" ")}
      >
        {!admin ? balance.toFixed(2) : "-"}
      </span>
    </div>
  );
};

export default UserBar;
