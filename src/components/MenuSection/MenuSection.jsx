import "./menuSection.css"

export default function MenuSection() {
    return (
        <div className="menuSection">
            <div className="opaa">
                <div className="menuMainBox">                
                    <div className="menuItem1">
                        DID YOU KNOW?
                    </div>
                    <div className="menuItem2">
                        ABOUT OUR RESTAURANT:
                    </div>
                    <div className="belowBox">
                        <div className="bb">
                            <div className="upperBoxItem1">
                                <i className="hotcuup fa-solid fa-mug-hot"></i>
                            </div>
                            <div className="upperBoxItem2">
                                FAMOUS FOR <br/> OUR COFFEE!
                            </div>
                        </div>
                        <div className="bb">
                            <div className="upperBoxItem1">
                                <i className="hotcuup fa-solid fa-mobile-screen-button"></i>
                            </div>
                            <div className="upperBoxItem2">
                                PHONE <br/> RESERVATIONS
                            </div>
                        </div>
                        <div className="bb">
                            <div className="upperBoxItem1">
                                <i className="hotcuup fa-regular fa-clock"></i>
                            </div>
                            <div className="upperBoxItem2">
                                OPEN EVERYDAY <br/> 08:00 - 01:00
                            </div>
                        </div>
                        <div className="bb">
                            <div className="upperBoxItem1">
                                <i className="hotcuup fa-solid fa-signs-post"></i>
                            </div>
                            <div className="upperBoxItem2">
                                LOCATED IN <br/> CITY CENTER
                            </div>
                        </div>
                    </div>
                </div>      
            </div> 
        </div>
  )
}
