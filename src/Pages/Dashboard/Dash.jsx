import React from 'react';
import Navbar from './DashNav';
import { useSelector } from 'react-redux';

const Dash = (props) => {
  const detail = useSelector((state) => state?.user);
  return (
    <React.Fragment>
      <div className="Header">
        <Navbar />
        {detail?.name}
      </div>
    </React.Fragment>
  );
};

export default Dash;
