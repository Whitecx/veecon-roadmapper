import { eventData } from '../data.js';
import './eventBlock.css';
import Event from './event.js';
const EventMapper = () => {
    return (
        <div>
        {eventData.map((eventBlock, i)=>{
            if(eventBlock.events.length > 1){
            return <div key={i.toString()} className={"eventBlock"}>
                <div style={{"font-size": "6vh", margin:"1%"}}>{eventBlock.date}</div>
                <Event events={eventBlock.events}/>   
            </div>
            }
        })}
        </div>
    )
};

export default EventMapper;
