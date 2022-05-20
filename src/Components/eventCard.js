const EventCard = ({event}) => {
    return (
        <div className={"tokenCard"}>
           <div className={"cardTitle"}>
                {event.title}
        <hr/>
            </div>
        <div className={"cardSubTitle"}>
            Speakers:
        </div>
        <div className={"info"}>
            {event.speakers && event.speakers.map((speaker,i)=>{
                return <div className={"tokenDisplay"} >
                    <a href={'javascript:void(0)'} onClick={e=>{searchName(e.target.innerText)}} className={"linkText"}>{speaker}</a>
                    </div>
            })}
        </div>
            <div className={"cardSubTitle"}>
                Desc:
            </div>
        <div className={"info-small"}>
                {event.desc}
        </div>
        </div>
    )
    function searchName(name){
        window.open(`https://www.google.com/search?q=${name}`);
    }
};

export default EventCard;
