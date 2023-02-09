import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";

import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);

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

const events = [
  {
    id: 0,
    title: "training",
    start: new Date(2023, 1, 9),
    end: new Date(2023, 1, 13),
    resourceId: 1,
  },
  {
    id: 1,
    title: "late lunch",
    start: new Date(2021, 1, 15),
    end: new Date(2021, 1, 18),
    resourceId: 2,
  },
];

function Home({ handleShowRegister }) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className="home_container">
      <div className="left_view">
        <h1>GEM</h1>
        <h6>YOUR TRUSTED PARTNER</h6>
        <div>
          <div>
            <img
              src="http://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"
              alt=""
              width={30}
              height={30}
            />
            Welcome
          </div>
          <div>Khanh Tuấn Nguyễn</div>
          <hr />
          <div className="under">
            <h6>
              <FaHome />
              Home
            </h6>
            <h6>
              <HiUserGroup />
              Rooms & Group
            </h6>
            <h6>
              <FaUserAlt />
              Users
            </h6>
            <label>New Events</label>
            <div>
              <p>
                <SlArrowRight />
                Event1
              </p>
              <p>
                <SlArrowRight />
                Event2
              </p>
              <p>
                <SlArrowRight />
                Event3
              </p>
              <p>
                <SlArrowRight />
                Event4
              </p>
            </div>
            {/* Add New Event */}
            <h2>Add Event</h2>
            <div>
              <input
                placeholder="Add title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
              <ReactDatePicker
                placeholderText="Start Date"
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <ReactDatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
              <Button variant="success" onClick={handleAddEvent}>
                Add Eventes
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="right_view">
        <div className="account">
          <AiOutlineArrowsAlt style={{ fontSize: 30, paddingRight: 8 }} />
          <img
            src="http://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"
            alt=""
            width={25}
            height={25}
            onClick={handleShowRegister}
          />
          <div>Khanh Tuấn</div>
          <MdOutlineArrowDropDown />
        </div>
        <div className="contents">
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
                {/* <Calendar
                  localizer={localizer}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                /> */}
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
      </div>
    </div>
  );
}

export default Home;
