import React from "react";
import Calendar from "./Calendar";
import Price from "./Price";
import "./table.css";

function Tables(props) {
  const { toggleValue } = props;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // to get date in defined format

  function dateFormat(date) {
    return (
      months[date.getUTCMonth()] +
      " " +
      date.getUTCFullYear() +
      ", " +
      date.getUTCDate()
    );
  }

  return (
    <div className="table-container">
      <table className="maintable">
        <thead>
          <tr>
            <th style={{ width: "11%" }}>{toggleValue ? "Date" : "Fecha"}</th>
            <th style={{ width: "24%" }}>
              {toggleValue ? "Campaign" : "Campaña"}
            </th>
            <th style={{ width: "19%" }}>{toggleValue ? "View" : "Ver"}</th>
            <th style={{ width: "46%" }}>
              {toggleValue ? "Actions" : "Accións"}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, idx) => (
            <tr key={idx}>
              <td style={{ width: "11%" }}>
                <article className="date-container">
                  <span className="bold">
                    {dateFormat(new Date(parseInt(item["createdOn"])))}
                  </span>
                  <span className="semibold">{item.dateDiff}</span>
                </article>
              </td>
              <td style={{ width: "24%" }}>
                <article className="campaign">
                  <img
                    src={require(`./../../Assets/${item["image_url"]}`).default}
                    alt="game_url"
                  />
                  <div className="campaign-text">
                    <span className="bold">{item["name"]}</span>
                    <span className="semibold">{item["region"]} </span>
                  </div>
                </article>
              </td>
              <td style={{ width: "19%" }}>
                <Price
                  item={{
                    name: item["name"],
                    region: item["region"],
                    price: item["price"],
                    image: item["image_url"],
                  }}
                  toggleValue={toggleValue}
                />
              </td>
              <td style={{ width: "46%" }}>
                <article className="actiondata">
                  <article className="csv-container">
                    <img
                      alt="csv"
                      src={require("../../Assets/file.png").default}
                    />
                    <span> {toggleValue ? "CSV" : "Archivo"}</span>
                  </article>
                  <article className="report-container">
                    <img
                      alt="report"
                      src={
                        require("../../Assets/statistics-report.png").default
                      }
                    />
                    <span>{toggleValue ? "Report" : "Reporte"}</span>
                  </article>
                  <Calendar
                    item={{
                      name: item["name"],
                      time: item["createdOn"],
                      id: item["id"],
                    }}
                    updatedData={props.updateData}
                    toggleValue={toggleValue}
                  />
                </article>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
