import React, { useEffect } from 'react'
import './LatestGames.css'
import { comingSoonGames, NewGames } from '../../datas/Data'
import { useState } from 'react'
function LatestGames() {
    const comingSoonGameData=comingSoonGames
    const newGamesData=NewGames
    const [buttonGame,setButtonGame]=useState("New releases")
    const [game,setGame]=useState([])

   

    useEffect(()=>{
        if(buttonGame=="New releases"){
            setGame(newGamesData)
        }else{
            setGame(comingSoonGameData)
        }
    },[buttonGame])


    
  return (
    <div className='lat-parent'>
        
      <div className="latest-parent">
        <div className="latest-heading">
            <h1>Great PS4 & PS5 games out now or coming soon</h1>
            <div>
                <button onClick={()=>setButtonGame("New releases")} style={buttonGame=="New releases"?{border:"1px solid dodgerBlue"}:{border:'none'}}>New releases</button>
                <button onClick={()=>setButtonGame("Coming soon")}  style={buttonGame=="Coming soon"?{border:"1px solid dodgerBlue"}:{border:'none'}}>Coming soon</button>
            </div>
        </div>
        <div className="latest-games" >
            {game.map((a)=>(
                  <div data-aos="fade-up">
                  <img src={a.gUrl} alt=""  />
                  <p>{a.gName}</p>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  )
}

export default LatestGames
