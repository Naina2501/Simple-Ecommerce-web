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
        <img src="https://www.pngitem.com/pimgs/m/478-4787743_student-png-woman-smiling-no-background-transparent-png.png" alt="" height='300' className='rounded rounded-3 bg-info' />
      </div>
    </div>
  )
}

export default Offer
