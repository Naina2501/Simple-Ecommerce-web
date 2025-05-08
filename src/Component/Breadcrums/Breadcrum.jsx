import React from 'react'
import './Breadcrum.css'
const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        Home <span className='bi bi-slash-lg'></span>Shop <span className='bi bi-slash-lg '></span>{product.category} <span className='bi bi-slash-lg '></span>{product.name}
      
    </div>
  )
}

export default Breadcrum
