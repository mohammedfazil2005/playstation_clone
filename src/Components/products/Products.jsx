import React from 'react'
import { productsImages } from '../../datas/Data'
import './Products.css'
function Products() {
  return (
    <div className='pro-parent'>
      <div className="products-parent">
        <div className="products-heading">
            <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps-gear-blue-icon-01-01feb21?$1600px--t$" alt="" />
            <h1>PlayStation official licenced apparel and merchandise</h1>
            <p>Browse the PlayStation Gear store for official accessories, collectibles, clothing <br /> and more</p>
        </div>
        <div className="products-cards-parent">
            {productsImages.map((a)=>(
                 <div className='products-card-row'>
                 <div className='pro-img-div'>
                     <img src={a.pUrl} alt="" />
                 </div>
                 <div className='pro-det-div'>
                     <p>{a.pName}</p>
                     <button>Buy now</button>
                 </div>
                 </div>
            ))}
           
        </div>
      </div>
    </div>
  )
}

export default Products
