import React, { useState } from 'react'
import './Middle.css'
function Middle() {

    const [image,setImage]=useState({pname:'PS5 Console',purl:'https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23?$1200px$',desc:'Experience lightning-fast load times, stunning visuals, and immersive gameplay with the PlayStation 5 console.'})

    const products = [
        { 
            pname: "PS5 Console", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23?$1200px$", 
            desc: "Experience lightning-fast load times, stunning visuals, and immersive gameplay with the PlayStation 5 console."
        },
        { 
            pname: "DualSense™ Wireless Controller", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-range-stacked-image-block-01-en-11feb22?$1200px$", 
            desc: "Enhance your gaming experience with haptic feedback, adaptive triggers, and a built-in microphone."
        },
        { 
            pname: "PULSE Elite™ Wireless Headset", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/PULSE-Elite-headset-thumbnail-01-en-08sep23?$1200px$", 
            desc: "Enjoy high-fidelity audio, noise-canceling technology, and seamless connectivity with this premium headset."
        },
        { 
            pname: "PULSE Explore™ Wireless Earbuds", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/PULSE-Explore-earbuds-image-block-01-en-08sep23?$1200px$", 
            desc: "Immerse yourself in rich sound with these wireless earbuds designed for PlayStation gaming on the go."
        },
        { 
            pname: "DualSense Edge", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-featured-hardware-image-block-01-en-11aug23?$1200px$", 
            desc: "Take control with customizable buttons, swappable thumbsticks, and advanced gaming precision."
        },
        { 
            pname: "Access™ Controller", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/access-controller-featured-hardware-image-block-01-en-12oct23?$1200px$", 
            desc: "A highly customizable controller designed for accessibility, offering easy and comfortable gaming for everyone."
        },
        { 
            pname: "PS5 Console Covers", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-console-cover-range-image-block-01-en-16feb22?$1600px$", 
            desc: "Personalize your PS5 with stylish console covers available in various colors and designs."
        },
        { 
            pname: "Media Remote", 
            purl: "https://gmedia.playstation.com/is/image/SIEPDC/media-remote-featured-hardware-image-block-01-en-11aug23?$1600px$", 
            desc: "Easily navigate your PS5’s entertainment features with this sleek and intuitive media remote."
        }
    ];

    

    const onBoxSelect=(productDet)=>{
        setImage(productDet)
    }



  return (
    <div>
      <div className="middle">
        <div className="middle-left">
            <h1>Discover all PS5 <br />consoles and <br /> accessories</h1>
            <h6>{image.pname}</h6>
            <p>{image.desc}</p>
            <div>
                <button style={{backgroundColor:'rgb(11, 84, 156)'}}>Find out more</button>
                <button style={{backgroundColor:'red'}}>Buy now</button>
            </div>
        </div>
        <div className="middle-right">
            <img src={image.purl} alt="" />
        </div>
      </div>

      <div className="boxes-middle-div">
        {products.map((a)=>(
              <div onClick={()=>onBoxSelect(a)}>
              <img src={a.purl} alt="" />
              <p>{a.pname}</p>
          </div>
        ))}
      
       
      </div>
    </div>
  )
}

export default Middle
