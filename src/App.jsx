import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Heading from './Components/homeHeading/Heading'
import Middle from './Components/middle/Middle'
import LatestGames from './Components/latestGames/LatestGames'
import PsPlus from './Components/psPlus/PsPlus'
import Anniversary from './Components/anniversary/Anniversary'
import Store from './Components/storeDet/Store'
import Products from './Components/products/Products'
import SocialMedia from './Components/socialmedia/SocialMedia'
import Footer from './Components/footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Middle />
      <LatestGames />
      <PsPlus/>
      <Anniversary/>
      <Store/>
      <Products/>
      <SocialMedia/>
      <Footer/>
    </div>
  )
}

export default App
