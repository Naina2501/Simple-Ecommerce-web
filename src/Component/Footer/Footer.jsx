import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
   
     <div className='footer'>
      <div className='footer-logo'>
      <img src='https://static.vecteezy.com/system/resources/previews/014/322/497/original/shopping-cart-icons-design-in-blue-circle-png.png' width='60' ></img>
      <p>𝔖𝔥𝔬𝔭-𝔬𝔫</p>
      </div>
      <ul className='footer-link'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>

      </ul>
      <div className="footer-social-icon">
        <div className='footer-icons-container'>
          <span className='bi bi-instagram'></span>
        </div>
        <div className='footer-icons-container'>
        <span className='bi bi-whatsapp'></span>
        </div>
        <div className='footer-icons-container'>
        <span className='bi bi-facebook'></span>
        </div>
      </div>
      <div className="footer-copyright">
            <hr/>
            <p>Copyright@2025-All Right is reserved</p>
        </div>
    </div>
  
  )
}

export default Footer
