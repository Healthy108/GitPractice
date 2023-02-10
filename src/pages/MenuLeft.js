import React from "react";
import Button from "react-bootstrap/Button";
import { FaHome } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import ReactDatePicker from "react-datepicker";
import "../styles/menuLeft.css";

function MenuLeft({ newEvent, setNewEvent, handleAddEvent }) {
  return (
    <div className="menu_container">
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
  );
}

export default MenuLeft;
