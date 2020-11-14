import React from "react";
import "./Header.css";

function Header(props) {
  const { renderComponent, componentToRender, toggleValue } = props;
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
              {toggleValue ? "Upcoming Campaigns" : "Próximas Campañas"}
            </span>
          </li>
          <li
            className={`navElement ${
              renderComponent === "LiveCampaigns" ? "active" : ""
            }`}
          >
            <span onClick={() => componentToRender("LiveCampaigns")}>
              {toggleValue ? "Live Campaigns" : "Campañas En Vivo"}
            </span>
          </li>
          <li
            className={`navElement ${
              renderComponent === "PastCampaigns" ? "active" : ""
            }`}
          >
            <span onClick={() => componentToRender("PastCampaigns")}>
              {toggleValue ? "Past Campaigns" : "Campañas pasadas"}
            </span>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export default Header;
