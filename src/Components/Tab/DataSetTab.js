import React, { useEffect, useState } from "react";
import Tables from "./table";
import Firebase from "firebase";

function DataSetTab(props) {
  const { renderComponent, toggleValue } = props;
  const [newData, setNewData] = useState([]);
  const [tabData, setTabData] = useState({ upComing: [], live: [], past: [] });

  useEffect(() => {
    getUserData();
  }, []);

  /**
   * Fetch Json Data from Firebase
   */
  const getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      let state = snapshot.val();
      state = state ? state.body : []; //Check if we are able to fetch data from firebase
      setNewData(state);
      mapData(state);
    });
  };

  /**
   * Update data with newdate when item is changed
   * @param {*} newdate 
   * @param {*} item 
   */
  const updateData = (newdate, item) => {
    const newJsonData = newData.map((data) => {
      if (data["name"] === item["name"]) {
        return { ...data, createdOn: newdate };
      }
      return data;
    });
    setNewData(newJsonData);
    mapData(newJsonData);
  };

  /**
   * Map data to section according to date
   * @param {*} dataToMap 
   */
  const mapData = (dataToMap) => {
    dataToMap = dataToMap.sort((a, b) =>
      a.createdOn < b.createdOn ? 1 : b.createdOn < a.createdOn ? -1 : 0
    );
    let upComing = [];
    let live = [];
    let past = [];
    dataToMap.forEach((data, index) => {
      const [type, date] = daySection(new Date(data.createdOn));
      const newObj = { ...data, dateDiff: date, id: index };
      if (type === "Live") {
        live.push(newObj);
      } else if (type === "Upcoming") {
        upComing.push(newObj);
      } else if (type === "Past") {
        past.push(newObj);
      }
    });

    const obj = {
      upComing: upComing,
      live: live,
      past: past,
    };
    setTabData(obj);
  };

  /**
   * Get date difference and determine date section
   * @param {1} date 
   */
  const daySection = (date) => {
    let currDate = new Date();
    let diff = Math.abs(date.getTime() - currDate.getTime());
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    date = date.setHours(0, 0, 0, 0);
    currDate = currDate.setHours(0, 0, 0, 0);
    if (date - currDate == 0) {
      return ["Live", `Today`];
    } else if (date - currDate > 0) {
      return ["Upcoming", `${diff} days ahead`];
    } else {
      return ["Past", `${diff} days ago`];
    }
  };

  /**
   * Determine which data to render as per user selection
   */
  const dataToRender = () => {
    if (renderComponent === "UpcomingCampaigns") {
      return tabData.upComing;
    } else if (renderComponent === "LiveCampaigns") {
      return tabData.live;
    } else {
      return tabData.past;
    }
  };

  return (
    <Tables
      data={dataToRender()}
      updateData={updateData}
      toggleValue={toggleValue}
    />
  );
}

export default DataSetTab;
