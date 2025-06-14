import React from 'react'
import all_product_data from "../Assets/All_product"
import "./RelatedProducts.css"
import Item from '../Item/Item'
const RelatedProducts = () => {
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
