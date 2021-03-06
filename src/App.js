import React from "react";
import "./App.css";
import FixedHeader from "./Components/Fixed Header/fixedheader";
import Header from "./Components/Header/Header";
import DataSetTab from "./Components/Tab/DataSetTab";
import ToggleButton from "react-toggle-button";
import Firebase from "firebase";
import config from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    /**Initialize firebase with config for database connection */
    Firebase.initializeApp(config);

    this.state = {
      renderComponent: "UpcomingCampaigns",
      toggleValue: true,
    };
  }

  /**
   * Set Active selection when header items are clicked
   * @param {*} renderElement 
   */
  componentToRender = (renderElement) => {
    this.setState({ renderComponent: renderElement });
  };

  render() {
    const {renderComponent, toggleValue } = this.state;
    return (
      <>
        <FixedHeader />
        <article className="mainArea">
          <h1>{`${
            toggleValue ? "Manage Campaigns" : "Administrar Campaña"
          }`}</h1>
          <ToggleButton
            inactiveLabel={"SN"}
            activeLabel={"EN"}
            value={toggleValue}
            onToggle={(value) => {
              this.setState({ toggleValue: !value });
            }}
          />
          <Header
            toggleValue={toggleValue}
            renderComponent={renderComponent}
            componentToRender={this.componentToRender}
          />
          <DataSetTab
            renderComponent={renderComponent}
            toggleValue={toggleValue}
          />
        </article>
      </>
    );
  }
}

export default App;
