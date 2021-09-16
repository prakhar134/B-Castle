import React, { useState, useEffect } from "react";
import LoginHead from "../../Components/LoginHead/loginHead";
import Sidebar from "../../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getPrice, getUser } from "../../actions/admin";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import AddBalance from "../../Components/addBalance/addBalance";
import AddTrade from "../../Components/addTrade/AddTrade";
import withAuth from "../../authentication";

const User = () => {
  const dispatch = useDispatch();
  const id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  useEffect(() => {
    dispatch(getUser(id));
    // eslint-disable-next-line
  }, [id]);

  const { user } = useSelector((state) => state?.Admin);
  const { price } = useSelector((state) => state?.Admin);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const onClick = (symbol) => {
    dispatch(getPrice(symbol));
  };
  const onClose = () => {
    setModal(false);
  };
  const onClose2 = () => {
    setModal2(false);
  };

  if (!user) return <div className="main_display">Loading...</div>;

  return (
    <>
      <Modal
        classNames={{ overlay: "customFormOverlay" }}
        open={modal}
        onClose={onClose}
        center
      >
        <AddBalance setModal={onClose} />
      </Modal>
      <Modal
        classNames={{ overlay: "customFormOverlay" }}
        open={modal2}
        onClose={onClose2}
        center
      >
        <AddTrade setModal={onClose2} />
      </Modal>
      <LoginHead />
      <div className="main_display">
        <p
          style={{
            fontSize: "2.5rem !important",
            textAlign: "center",
            fontWeight: 700,
            color: user?.balance < 200 ? "red" : "green",
          }}
          className="user_balance"
        >
          ₹{user?.balance}
        </p>
        <div style={{ marginBottom: "35px" }} className="flex">
          <span
            onClick={() => setModal2(true)}
            className={user?.balance > 200 ? "special" : "normal"}
          >
            Add Trade
          </span>
          <span
            onClick={() => setModal(true)}
            className={user?.balance > 200 ? "normal" : "special"}
          >
            Add Balance
          </span>
        </div>
        <form
          id="hd"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            margin: "auto",
          }}
        >
          <div className="input_group">
            <label htmlFor="name">User's Name</label>
            <input type="text" name="name" value={user?.name} />
          </div>
          <div className="input_group">
            <label htmlFor="mail">User's Email</label>
            <input type="email" name="mail" value={user?.email} />
          </div>
        </form>
        <div style={{ width: "100%", overflowX: "scroll", marginLeft: "30px" }}>
          <h1 style={{ textAlign: "center" }} className="news__heading">
            User's Last trades
          </h1>
          <table>
            <tr>
              <th>Coin</th>
              <th>Trading Price</th>
              <th>Trading quantity</th>
              <th>Current Price</th>
              <th></th>
              <th>Trade Date</th>
            </tr>
            {user &&
              user?.trades &&
              user?.trades.reverse()?.map((trade) => (
                <tr>
                  <td style={{ fontSize: "1.1em", fontWeight: "600" }}>
                    {trade.name}
                  </td>
                  <td>{trade.price}</td>
                  <td>{trade.quantity}</td>
                  <td style={{ minWidth: "100px" }}>
                    {price.symbol !== trade.name ? (
                      <span
                        onClick={() => onClick(trade.name)}
                        style={{
                          backgroundColor: "whitesmoke",
                          border: "2px solid grey",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                          cursor: "pointer",
                          fontSize: "0.9em",
                        }}
                      >
                        Get Price
                      </span>
                    ) : (
                      <span style={{ fontWeight: 700 }}>{price.price}</span>
                    )}
                  </td>
                  <td style={{ minWidth: "100px" }}>
                    <span
                      style={
                        trade.type === "buy"
                          ? {
                              padding: "5px 20px",
                              borderRadius: "15px",
                              backgroundColor: "rgba(0, 250, 50, 0.2)",
                              color: "green",
                            }
                          : {
                              padding: "1px 20px",
                              borderRadius: "15px",
                              backgroundColor: "rgba(250, 50, 0, 0.2)",
                              color: "red",
                            }
                      }
                    >
                      {trade.type}
                    </span>
                  </td>
                  <td style={{ minWidth: "100px" }}>
                    {trade.dateOfTrade || "00/00/00"}
                  </td>
                </tr>
              ))}
          </table>
          {(!user?.trades || user?.trades.length === 0) && (
            <p className="noTrades">No Trade Found</p>
          )}
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default withAuth(User);
