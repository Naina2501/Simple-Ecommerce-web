import React from 'react'

import "./RelatedProducts.css"
import Item from '../Item/Item'
import { useState,useEffect } from 'react'
const RelatedProducts = () => {
const [all_product_data,setProductData]=useState([]);
useEffect(()=>{
fetch('http://localhost:4000/allproducts').then((response)=>response.json()).then((data)=>setProductData(data));
},[])
  return (
    <div className='RelatedProducts'>
      <h1>Related Products</h1>
      <hr/>
     <div className='product_conatiner'>
       <div className="relatedProduct-Item">
        {
            all_product_data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
     </div>
    </div>
  )
}

export default RelatedProducts
