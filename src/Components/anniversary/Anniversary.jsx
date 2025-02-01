import React from 'react'
import './Anniversary.css'
function Anniversary() {
    return (
        <div>
            <div className="anniversary-parent">
                <div className="anniversary-left">
                    <h1>30 years of PlayStation</h1>
                    <p>Join us as we celebrate 30 years of PlayStation with a series of special events,<br /> and look back at the consoles, games and greatest moments that brought play to life.</p>
                    <div>
                        <button>Join the celebrations</button>
                        <button>Explore our history</button>
                    </div>
                </div>
                <div className="anniversary-right">
                    <img src="https://gmedia.playstation.com/is/image/SIEPDC/30th-anniversary-logo-01-en-21aug24?$1600px--t$" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Anniversary
