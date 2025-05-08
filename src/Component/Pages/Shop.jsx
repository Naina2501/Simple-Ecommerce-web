import React from 'react'
import Home from '../Home/Home'
import Popular from '../Popular/Popular'
import Offer from "../Offer/offer"
import NewCollection from '../NewCollection/NewCollection'
import NewsLetter from '../NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div className='mt-2'>
        <Home/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <NewsLetter/>
        
    </div>
  )
}

export default Shop
