import React, { useState } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
  const { all_product_data, cartItems, removeToCart } = useState(ShopContext);
  return (
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_product_data.map((e) => {
          if(cartItems[e.id] > 0) 
            {
            return <div>
              <div className='cartItems-format-main'>
                <img src={e.image} className='cartIcon-Product-icon'></img>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>

                <img src="https://th.bing.com/th/id/OIP.7yLcm65VD7WdBiSVpt80KQHaHa?rs=1&pid=ImgDetMain" onClick={() => { removeToCart(e.id) }}></img>
              </div>
              <hr />

            </div>
          }
          return null
        })}
        <div className="cartitems-down">
          <div className="cartItems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className='.cart-items-total'>
                <p>SubTotal</p>
                <p>${0}</p>
              </div>
            <hr></hr>
            <div className="items-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className="items-total-item">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default CartItem
