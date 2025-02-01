import React from 'react'
import './PsPlus.css'
import ps5Adp from '../../assets/ps5Adp.mp4'
import ps5adp2 from '../../assets/ps5adp2.mp4'
function PsPlus() {
    return (
        <div className='ps5-pa'>
            <div className="ps5-parent">
                <div className="ps5-heading">
                    <h1>Immersive play with the <br /> DualSense® wireless <br />controller</h1>
                   <h6>Discover a deeper gaming experience* with the incredibly tactile features of the innovative PS5 controller.</h6>
                   <p>*Compared to DUALSHOCK@4 wireless controller</p>
                </div>
                <div className="ps5-ad-parent">
                   <div>
                    <video src={ps5Adp} autoPlay loop muted></video>
                    <div className='ps5-details'>
                        <div>
                            <img src="https://www.beamng.com/attachments/upload_2023-10-22_4-32-3-png.1072323/" alt="" />
                        </div>
                        <div>
                        <h2>Adaptive Triggers1</h2>
                            <p>Dynamic resistance mimics the tension of interactions with in-game gear and objects in select PS5 games.</p>
                            <p>From pulling back an increasingly tight bowstring to hitting the brakes on a speeding car, feel physically connected to your on-screen actions.</p>
                        </div>
                    </div>
                   </div>
                   <div>
                    <video src={ps5adp2} autoPlay loop muted></video>
                    <div className='ps5-details'>
                        <div>
                            <img src="https://www.gamestore.com.kw/web/image/77984/adaptive-triggers-icon-03-en-15jun20.png?access_token=274d7902-87a4-4467-9a18-bad75b02f875" alt="" />
                        </div>
                        <div>
                            <h2>Haptic Feedback1</h2>
                            <p>Responsive vibrations react to your in-game choices and simulate environmental factors in select PS5 games.  </p>
                            <p>In your hands, these dynamic vibrations can simulate the feeling of everything from environments to the recoil of different weapons.</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default PsPlus
