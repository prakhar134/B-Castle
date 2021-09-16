import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const GoogleForm = () => {
  return (
    <div className="screen-form">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="planChooser"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf2nx4aV5ZCx1cAENp0S1c9M1z3tYOrI7wvMBGHbjOUL-J1UQ/viewform?embedded=true"
          width="640"
          height="1167"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleForm;
