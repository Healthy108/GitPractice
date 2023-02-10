import React from "react";
import Button from "react-bootstrap/Button";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaRegHandPointRight } from "react-icons/fa";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "../styles/homeContents.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function HomeContents({ allEvents }) {
  return (
    <div className="homecontents_container">
      <div className="input_group">
        <input placeholder="From: yy/mm/dd hh:mm" />
        <input placeholder="To: yy/mm/dd hh:mm" />
        <Button variant="primary">Search empty rooms</Button>
        <input placeholder="Search event..." />
        <Button variant="primary">Search</Button>
      </div>

      <div className="content_calender">
        <div className="event_layout">
          <div className="events">
            <Button variant="success">Add Event</Button>
            <h4>Events Manager</h4>
            <RiArrowGoBackLine />
          </div>
        </div>
        {/* <hr /> */}
        <div className="btncalendar_group">
          <div className="btn">
            <Button variant="light">
              <div>
                <FaRegHandPointRight />
                {""} ALL
              </div>
            </Button>
            <Button variant="warning">Meeting room 1</Button>
            <Button variant="success">Meeting room 2</Button>
            <Button variant="info">Meeting room 3</Button>
            <Button variant="danger">Meeting room 4</Button>
            <Button variant="secondary">Meeting room 5</Button>
            <Button variant="primary">Meeting room 6</Button>
          </div>
          <div className="calendar">
            <Calendar
              localizer={localizer}
              events={allEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, margin: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContents;
