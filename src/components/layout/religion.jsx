
import { NavLink } from 'react-router-dom';
import './religion.css'
const Religion = () =>{
    return (
        <div className="event-page">
      <div className="event-content">
        <div className="event-links">
          <NavLink className="event-link" to={'/religion'}>Christianity</NavLink>
          <NavLink className="event-link" to={'/religion/buddhism'}>Buddhism</NavLink>
          <NavLink className="event-link" to={'/religion/hinduism'}>Hinduism</NavLink>
          <NavLink className="event-link" to={'/religion/natural'}>Mother of Natural</NavLink>
        </div>
      </div>
    </div>
    )
}

export default Religion;