import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
  const {all_product_data,cartItems,removeToCart,getTotalCartAmount}=useContext(ShopContext)
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
      <hr/>
     {
      all_product_data.map((e,i)=>{
        if(cartItems[e.id]>0){
          return  <div>
          <div className="cartIems-format cartItems-format-main">
            <img src={e.image} key={i} alt="" className='carticon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='btn btn-outline-dark cartItems-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price * cartItems[e.id]}</p>
            <button className=' bi bi-x fs-3  rounded rounded-2 btn btn-outline-danger' onClick={()=>{removeToCart(e.id)}}></button>
          </div>
        </div>
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartItems-total' >
         <h1>Cart Total</h1>
         <div>
          <div className='cartitems-total-items'>
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cartitems-total-items">
             <p>Shipping Fee</p>
             <p>Free</p>
          </div>
          <hr/>
          <div className='cartitems-total-items'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          </div>
         <button className='btn btn-outline-secondary w-50'>Proceed To checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promo code , Enter it here</p>
       <div className="cartitems-promobox">
        <input type='text' placeholder='promo code'></input>
       <button>Submit</button>
       </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
