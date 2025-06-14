import React, { useContext } from 'react'
import "./productDisplay.css"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='display-left'>
        <div className="display-img-list">
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
        </div>
        <div className="display-image">
            <img src={product.image} className="display-main-img"></img>
        </div>
      </div>
      <div className='display-right'>
        <h1>{product.name}</h1>
        <div className='display-right-star'>
          <span className='bi bi-star-fill'></span>
          <span className='bi bi-star-fill'></span>
          <span className='bi bi-star-fill'></span>
          <span className='bi bi-star-fill'></span>
          <span className='bi bi-star'></span>
          <p>(122)</p>
        </div>
         <div className='display-rigth-prices'>
           <div className='display-right-price-old'>${product.old_price}</div>
           <div className='display-right-price-new'>${product.new_price}</div>
          </div>
         <div className="display-right-description text-light">
         {product.description}
          </div>
         <div className="display-right-size">
          <h1>Select Size</h1>
          <div className='display-right-sizes'>
               <div>S</div>
               <div>M</div>
               <div>L</div>
               <div>XL</div>
               <div>XXL</div>
         </div>
         </div>
      
      <button onClick={()=>{ addToCart(product.id) }}>Add to Cart</button>
      <p className='display-right-category text-light'>
        <span>Category:&nbsp;&nbsp;</span>  {product.category}  <br/>T-shirt &nbsp;, Crop-top
     
      </p>
      <p className='display-right-category text-white'>
        <span>Tags:&nbsp;</span>Modern,latest
      </p>
      </div>
    </div>
  )
}

export default ProductDisplay
