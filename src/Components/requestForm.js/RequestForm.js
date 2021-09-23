import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { setRequest } from "../../actions/admin";
import toastifier from "toastifier";

const RequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [balance, setBalance] = useState("");
  const [openLoginModal, setLoginModal] = useState(false);
  const [dropdown, setDropdown] = useState("none");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (balance.length === 0)
      toastifier("Choose plan first", { type: "error" });
    else if (phone.length < 10)
      toastifier("Please enter correct phone number", { type: "error" });
    else {
      dispatch(setRequest(name, email, phone, balance));
      setName("");
      setPhone("");
      setPhone("");
      setBalance("");
    }
  };
  console.log("object");
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#000" }}
        openLoginModal={openLoginModal}
        setLoginModal={setLoginModal}
      />
      <div
        style={{
          marginTop: "5em",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Request balance</h1>
        <h3
          style={{
            color: "#555",
            marginTop: "15px",
            marginBottom: "35px",
            fontWeight: 400,
            padding: "0 2em",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Enter your details and choose your plan here, we'll reach you shortly
          with the required steps to take care of
        </h3>

        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            margin: "auto",
          }}
        >
          <div className="input_group">
            <label htmlFor="name">Enter your name</label>
            <input
              required
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="group_2">
            <div className="input_group">
              <label htmlFor="pass1">Enter your Email</label>
              <input
                required
                type="email"
                name="mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="input_group">
              <label htmlFor="pass2">Enter your phone</label>
              <input
                required
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="input_group">
            <label htmlFor="name">Choose your plan</label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setDropdown(dropdown === "none" ? "block" : "none");
              }}
              className="dropdown-button"
            >
              {balance ? balance : "Select here"}
            </button>
            <div style={{ display: dropdown }} className="dropdown-menu">
              <div
                className="dropdown-btn"
                onClick={() => {
                  setDropdown("none");
                  setBalance("Bronze");
                }}
              >
                Bronze Plan
              </div>
              <div
                className="dropdown-btn"
                onClick={() => {
                  setDropdown("none");
                  setBalance("Silver");
                }}
              >
                Silver Plan
              </div>
              <div
                className="dropdown-btn"
                onClick={() => {
                  setDropdown("none");
                  setBalance("Gold");
                }}
              >
                Gold Plan
              </div>
            </div>
          </div>
          <input
            required
            style={{ marginTop: "25px" }}
            type="submit"
            value="Request Balance"
            className="special"
          />
        </form>
      </div>
    </>
  );
};

export default RequestForm;
