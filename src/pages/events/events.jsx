import React from "react";
import "./events.css";
import { NavLink } from "react-router-dom";

function EventsPage() {
  return (
    <div className="event-page">
      <div className="event-content">
        <div className="event-links">
          <NavLink className="event-link" to={'/religion/christianity'}>Christianity</NavLink>
          <NavLink className="event-link" to={'/religion/buddhism'}>Buddhism</NavLink>
          <NavLink className="event-link" to={'/religion/hinduism'}>Hinduism</NavLink>
          <NavLink className="event-link" to={'/religion/natural'}>Mother of Natural</NavLink>
        </div>
      </div>
        <div className="coming-soon">
          <h2>Coming Soon</h2>
        </div>
    </div>
  );
}

export default EventsPage;
