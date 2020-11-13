import React from "react";
import logo from '../../Assets/bluestacks.png';
import "./fixedheader.css";

function FixedHeader() {
  return (
    <article className="fixedheader">
      <img
        alt="logo"
        src={logo}
        width="170"
        height="50"
      />
    </article>
  );
}

export default FixedHeader;
