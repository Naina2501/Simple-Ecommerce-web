import React, { useContext } from 'react'
import "./Css/ShopCategory.css"
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className='category-banner'/>
      <div className="category-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 30 Product
        </p>
        <div className="category-sort">
          sort by <span className='bi bi-sort-alpha-down'></span>
        </div>
        

      </div>
      <div className="category-products text-white">
          {
            all_product.map((item,i)=>{
              if(props.category==item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
                else{
                  return null
                }

            })
          }
        </div>
        <div className="category-LoadMore">
           Explore More
        </div>
    </div>
  ) 
}

export default ShopCategory
