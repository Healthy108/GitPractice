import React from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { FaRegHandPointRight, FaRegUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function Home() {
  return (
    <div className="home_container">
      <div className="left_view">
        <h1>GEM</h1>
        <h6>YOUR TRUSTED PARTNER</h6>
        <div>
          <FaRegUserCircle />
          <div>Welcome</div>
          <div>Khanh Tuấn Nguyễn</div>
          <hr />
          <FaHome />
          <h2>Home</h2>
        </div>
        <label>New Events</label>
        <div>
          <p>Event1</p>
          <p>Event2</p>
          <p>Event3</p>
          <p>Event4</p>
        </div>
      </div>
      <div className="right_view">
        <div className="account">
          <AiOutlineArrowsAlt />
          <FaRegUserCircle />
          <div>Khanh Tuấn</div>
        </div>
        <div className="contents">
          <div className="input_group">
            <input />
            <input />
            <Button variant="primary">Search empty rooms</Button>
            <input />
            <Button variant="primary">Search</Button>
          </div>

          <div className="content_calender">
            <div>
              <Button variant="success">Add Event</Button>
              <label>Events Manager</label>
              <hr />
            </div>
            <div className="btncalendar_group">
              <div className="btn">
                <Button variant="light">
                  <FaRegHandPointRight />
                  <label>ALL</label>
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
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
