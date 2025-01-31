import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Heading from './Components/homeHeading/Heading'
import Middle from './Components/middle/Middle'
import LatestGames from './Components/latestGames/LatestGames'
import PsPlus from './Components/psPlus/PsPlus'


const App = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Middle />
      <LatestGames />
      <PsPlus/>
    </div>
  )
}

export default App
