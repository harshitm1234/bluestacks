import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

function CalendarView(props) {
  const [date, setDate] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);

  const handleChange = (date) => {
    const time = new Date(date).getTime() + 5.5 * 3600000; // for Indian std Time
    props.updatedData(time, props.item);
    setDate(date);
    setViewCalendar(false);
  };

  const handleClick = () => {
    setViewCalendar((prevState) => !prevState);
  };

  return (
    <div className="calendarDiv">
      <img alt="calendar" src={require("../../Assets/calendar.png").default} />
      <button onClick={handleClick}>
        {props.toggleValue ? "Schedule Again" : "Programar de nuevo"}
      </button>
      {viewCalendar && <Calendar onChange={handleChange} value={date} />}
    </div>
  );
}

export default CalendarView;
