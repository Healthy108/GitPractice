import React from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { FaRegHandPointRight, FaRegUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function Home({ handleShowRegister }) {
  return (
    <div className="home_container">
      <div className="left_view">
        <h1>GEM</h1>
        <h6>YOUR TRUSTED PARTNER</h6>
        <div>
          <div>
            <FaRegUserCircle style={{ fontSize: 30 }} />
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
          </div>
        </div>
      </div>
      <div className="right_view">
        <div className="account">
          <AiOutlineArrowsAlt style={{ fontSize: 30, paddingRight: 8 }} />
          <FaRegUserCircle style={{ fontSize: 25 }} />
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
                <Button variant="success" onClick={handleShowRegister}>
                  Add Event
                </Button>
                <label>Events Manager</label>
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
