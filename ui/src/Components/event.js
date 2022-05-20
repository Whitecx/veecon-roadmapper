import EventCard from './eventCard.js';
import './card.css';
const Event = ({events}) => {
    return (
        <div className={"tokenDisplay"}>
        {events.map((event,i)=>{
            return <div>
                <EventCard event={event}/>
            </div>
        })}
        </div>
    )
};

export default Event;
