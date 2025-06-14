import React from 'react'
import './Breadcrum.css'
const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        Home <span className='bi bi-chevron-right'></span>Shop <span className='bi bi-chevron-right '></span>{product.category} <span className='bi bi-chevron-right '></span>{product.name}
      
    </div>
  )
}

export default Breadcrum
