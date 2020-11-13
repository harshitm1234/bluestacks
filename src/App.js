import React, { useState } from "react";
import "./App.css";
import FixedHeader from "./Components/Fixed Header/fixedheader";
import Header from "./Components/Header/Header";
import DataSetTab from "./Components/Tab/DataSetTab";
import ToggleButton from "react-toggle-button";

function App() {
  const [renderComponent, setRenderComponent] = useState("UpcomingCampaigns");
  const [toggleValue, setToggleValue] = useState(true);
  const componentToRender = (renderElement) => {
    setRenderComponent(renderElement);
  };
  return (
    <>
      <FixedHeader />
      <article className="mainArea">
        <h1>{`${toggleValue ? "Manage Campaigns" : "Administrar Campaña"}`}</h1>
        <ToggleButton
          inactiveLabel={"SN"}
          activeLabel={"EN"}
          value={toggleValue}
          onToggle={(value) => {
            setToggleValue(!value);
          }}
        />
        <Header
          toggleValue={toggleValue}
          renderComponent={renderComponent}
          componentToRender={componentToRender}
        />
        <DataSetTab
          renderComponent={renderComponent}
          toggleValue={toggleValue}
        />
      </article>
    </>
  );
}

export default App;
