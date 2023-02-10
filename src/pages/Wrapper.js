import React, { useState } from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import HomeContents from "./HomeContents";
import Menu from "./MenuLeft";
import { events } from "../components/events";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/wrapper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

function Wrapper({ handleShowRegister }) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className="wrapper_container">
      <Menu
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        handleAddEvent={handleAddEvent}
      />
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
          <HomeContents allEvents={allEvents} />
          {/* <UserContents /> */}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
