import React, { useEffect, useState } from "react";
import data from "../../Assets/Data";
import Tables from "./table";

function DataSetTab(props) {
  const { renderComponent,toggleValue } = props;
  const [newData, setNewData] = useState(data.body);
  const [tabData, setTabData] = useState({ upComing: [], live: [], past: [] });

  useEffect(() => {
    mapData(data.body);
  }, []);

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

  const dataToRender = () => {
    if (renderComponent === "UpcomingCampaigns") {
      return tabData.upComing;
    } else if (renderComponent === "LiveCampaigns") {
      return tabData.live;
    } else {
      return tabData.past;
    }
  };

  return <Tables data={dataToRender()} updateData={updateData} toggleValue={toggleValue}/>;
}

export default DataSetTab;
