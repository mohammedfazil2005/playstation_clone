import React, { useRef, useState } from 'react'
import './Middle.css'
import { products } from '../../datas/Data';
 

function Middle() {

    const [image,setImage]=useState({pname:'PS5 Console',purl:'https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23?$1200px$',desc:'Experience lightning-fast load times, stunning visuals, and immersive gameplay with the PlayStation 5 console.'})

    const scrollRef = useRef(null);

    const product=products

  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

    

   

    

    const onBoxSelect=(productDet)=>{
        setImage(productDet)
    }



  return (
    <div>
      <div className="middle">
        <div className="middle-left">
            <h1>Discover all PS5 consoles and  accessories</h1>
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

      <div className="boxes-middle-div" ref={scrollRef} >
        {product.map((a)=>(
              <div onClick={()=>onBoxSelect(a)}>
              <img src={a.purl} alt=""  />
              <p>{a.pname}</p>
          </div>
        ))}
      
       
      </div>
      <div className="scroll-button-div">
      <i class="fa-solid fa-arrow-left" onClick={scrollLeft}></i>
      <i class="fa-solid fa-arrow-right" onClick={scrollRight}></i>
      </div>
    </div>
  )
}

export default Middle
