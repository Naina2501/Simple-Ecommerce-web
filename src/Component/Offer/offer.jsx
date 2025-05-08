import React from 'react'
import "./offer.css"

 const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On best sellers products</p>
        <button className='btn btn-secondary me-3'>Check Now</button>
      </div>
      <div className="offer-right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSejUjBN_XzDLISYETFgkmMQMnTGigVYeMQ&s" alt="" height='450' className='rounded rounded-3' />
      </div>
    </div>
  )
}

export default Offer
