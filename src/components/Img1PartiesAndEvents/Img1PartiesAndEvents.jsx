import "./img1PartiesAndEvents.css"

export default function Img1PartiesAndEvents(props) {
    return (
        <div className="img1PartiesAndEvents" >
            <div className="partiesAndEventsLeft" style={{ backgroundImage: `url(${props.linkParties})` }}>
                <div className="partyBox"></div>
            </div>
            <div className="partiesAndEventsRight">
                <div className="partiesAndEventsRightItem1">
                    Event
                </div>
                <div className="partiesAndEventsRightItem2">
                    {props.partiesAndEventsRightItem2}
                </div>
                <div className="partiesAndEventsRightItem3">
                    {props.partiesAndEventsRightItem3}
                </div>
                <div className="partiesAndEventsRightItem4">
                </div>
                <div className="partiesAndEventsRightItem5">
                    <button className="rightItem5">
                        LEARN MORE
                    </button>
                </div>

            </div>
        </div>
    )
}
