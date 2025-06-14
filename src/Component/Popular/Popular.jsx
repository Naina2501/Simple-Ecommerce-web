import React, { useEffect, useState } from 'react'
import "./popular.css"

import Item from '../Item/Item'
const Popular = () => {
const [popularproduct,setPopularProduct]=useState([])
useEffect(()=>{
fetch('http://localhost:4000/popular-women').then((response)=>{response.json()}).then((data)=>{setPopularProduct(data)});
},[])
  return (
    <div className='popular'>
      <h1>Popular in women</h1>
      <hr/>
      <div className="popular-item">
        { 
        popularproduct.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
             })}
      </div>
      
    </div>
  )
}

export default Popular
