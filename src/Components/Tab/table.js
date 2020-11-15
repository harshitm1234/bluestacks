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
            <th data scope="col">{toggleValue ? "Date" : "Fecha"}</th>
            <th scope="col">
              {toggleValue ? "Campaign" : "Campaña"}
            </th >
            <th scope="col">{toggleValue ? "View" : "Ver"}</th>
            <th scope="col">
              {toggleValue ? "Actions" : "Accións"}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, idx) => (
            <tr key={idx}>
              <td data-th={toggleValue ? "Date" : "Fecha"}>
                <article className="date-container">
                  <span className="bold">
                    {dateFormat(new Date(parseInt(item["createdOn"])))}
                  </span>
                  <span className="semibold">{item.dateDiff}</span>
                </article>
              </td>
              <td data-th={toggleValue ? "Campaign" : "Campaña"}>
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
              <td data-th={toggleValue ? "View" : "Ver"}>
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
              <td data-th={toggleValue ? "Actions" : "Accións"}>
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
