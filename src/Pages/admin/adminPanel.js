import React, { useState, useEffect } from "react";
import LoginHead from "../../Components/LoginHead/loginHead";
import Sidebar from "../../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getRequest } from "../../actions/admin";
import UserBar from "../../Components/UserBar/UserBar";
import "./admin.css";
import News from "../../Components/News/News";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import AddNews from "../../Components/addNews/AddNews";
import withAuth from "../../authentication";
import UserBar2 from "../../Components/UserBar/userBar2";

const AdminPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getRequest());
    // eslint-disable-next-line
  }, []);
  var { users, requests } = useSelector((state) => state.Admin);
  const [value, setValue] = useState("");
  const [usersF, setUsersF] = useState([]);
  const [newsModal, setNewsModal] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    users = users.filter(
      (user) =>
        user?.name.indexOf(value) !== -1 || user?.email.indexOf(value) !== -1
    );
    setUsersF(users);
  };
  const onClose = () => setNewsModal(false);

  return (
    <div>
      <LoginHead />
      <div style={{ overflowX: "hidden" }} className="main main_display">
        <input
          placeholder="Search Users"
          type="text"
          value={value}
          onChange={onChange}
          className="filter"
        />
        {usersF.length === 0 && value.length !== 0 && (
          <p className="noTrades">No Users Found</p>
        )}
        <div
          style={{ width: "100%", overflowX: "scroll", marginBottom: "50px" }}
          className="table"
        >
          {value.length === 0
            ? users
                ?.slice(0, 10)
                ?.map((user) => (
                  <UserBar
                    key={user?._id}
                    id={user?._id}
                    name={user?.name}
                    email={user?.email}
                    balance={user?.balance}
                    admin={user?.isAdmin}
                  />
                ))
            : usersF?.map((user) => (
                <UserBar
                  key={user?._id}
                  id={user?._id}
                  name={user?.name}
                  email={user?.email}
                  balance={user?.balance}
                  admin={user?.isAdmin}
                />
              ))}
        </div>
        <h1 style={{ marginBottom: "20px" }}>Pending balance requests</h1>
        <div
          style={{ width: "100%", overflowX: "scroll", marginBottom: "50px" }}
          className="table"
        >
          {requests.map((request) => (
            <UserBar2
              id={request._id}
              name={request.name}
              email={request.email}
              phone={request.phone}
              balance={request.balance}
            />
          ))}
        </div>
        <News />
        <Link
          style={{ marginBottom: "50px" }}
          className="special"
          onClick={() => setNewsModal(true)}
        >
          Add News
        </Link>
      </div>
      <Sidebar />
      <Modal
        classNames={{
          modal: "customFormModal",
          overlay: "customFormOverlay",
        }}
        open={newsModal}
        onClose={onClose}
        center
      >
        <AddNews setModal={onClose} />
      </Modal>
    </div>
  );
};

export default withAuth(AdminPanel);
