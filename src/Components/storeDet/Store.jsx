import React from 'react'
import './Store.css'

function Store() {
  return (
    <div>
        <div className="store-parent">
            <div className="store-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/PlayStation_Store.png" alt="" />
                <h1>New savings on <br /> PlayStation Store</h1>
                <p>Explore the latest discounts and seasonal sales on great games and add-ons for PS5 and PS4.</p>
                <button>See all deals</button>
            </div>
            <div className="store-right">
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps-store-evergreen-image-block-01-en-09aug22?$1600px$" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Store
