import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

function CalendarView(props) {
  const [date, setDate] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  /**
   * Reference to capture clicks made on and outside of component
   * We will control show/hide of Calendar on basis of this
   * */
  const componentReference = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick, false);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, false);
    };
  }, []);

  /**
   * Check if clicked outside calendar then close calendar
   * @param {*} e
   */
  const handleOutsideClick = (e) => {
    if (
      componentReference.current?.contains(e.target) ||
      e?.target?.innerText == "Schedule Again"
    ) {
      return;
    }
    if (!viewCalendar) {
      setViewCalendar(false);
    }
  };

  /**
   * Handle date change from calendar
   * @param {} date
   */
  const handleChange = (date) => {
    const time = new Date(date).getTime() + 5.5 * 3600000; // for Indian std Time
    props.updatedData(time, props.item);
    setDate(date);
    setViewCalendar(false);
  };

  /**
   * Handle Schedule again click view to hide and show calendar
   */
  const handleClick = () => {
    setViewCalendar((prevState) => !prevState);
  };

  return (
    <div className="calendar">
      <div className="calendarDiv">
        <img
          alt="calendar"
          src={require("../../Assets/calendar.png").default}
        />
        <button onClick={handleClick}>
          {props.toggleValue ? "Schedule Again" : "Programar de nuevo"}
        </button>
      </div>
      {viewCalendar && (
        <div class="renderCalendar" ref={componentReference}>
          <Calendar onChange={handleChange} value={date} />
        </div>
      )}
    </div>
  );
}

export default CalendarView;
