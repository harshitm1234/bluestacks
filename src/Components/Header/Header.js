import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  const {renderComponent,componentToRender} = props;
  return (
    <article className="navWrapper">
      <nav>
        <ul>
          <li
            className={`navElement ${
              renderComponent === "UpcomingCampaigns" ? "active" : ""
            }`}
          >
            <span onClick={() => componentToRender("UpcomingCampaigns")}>
              Upcoming Campaigns
            </span>
          </li>
          <li
            className={`navElement ${
              renderComponent === "LiveCampaigns" ? "active" : ""
            }`}
          >
            <span onClick={() => componentToRender("LiveCampaigns")}>
              Live Campaigns
            </span>
          </li>
          <li
            className={`navElement ${
              renderComponent === "PastCampaigns" ? "active" : ""
            }`}
          >
            <span onClick={() => componentToRender("PastCampaigns")}>
              Past Campaigns
            </span>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export default Header;