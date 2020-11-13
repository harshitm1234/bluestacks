import React, { useState } from "react";
import "./App.css";
import FixedHeader from "./Components/Fixed Header/fixedheader";
import Header from "./Components/Header/Header";
import DataSetTab from "./Components/Tab/DataSetTab"

function App() {
  const [renderComponent, setRenderComponent] = useState("UpcomingCampaigns");
  const componentToRender = (renderElement) => {
    setRenderComponent(renderElement);
  };
  return (
    <>
      <FixedHeader />
      <article className="mainArea">
        <h1>Manage Campaigns</h1>
        <Header renderComponent={renderComponent} componentToRender={componentToRender}/>
        <DataSetTab renderComponent={renderComponent} />
      </article>
    </>
  );
}

export default App;
