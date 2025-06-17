import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
 
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext)
  const menuRef = useRef()

  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle("nav-menu-visible")
   e.target.classList.toggle('open');
  }
  return (
  
      <div className='navbar mt-3'>
      <div className='nav-logo'>
        <img src='https://static.vecteezy.com/system/resources/previews/014/322/497/original/shopping-cart-icons-design-in-blue-circle-png.png' width='60'></img>
        <p>𝔖𝔥𝔬𝔭𝔬𝔫</p>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" className='nav-dropdown' onClick={dropdown_toggle} ></img>
      <ul className='nav-menu ' ref={menuRef}>
        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Shop</Link>{menu === "shop" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none', color: 'black' }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='/womens' style={{ textDecoration: 'none', color: 'black' }}>Women </Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids' style={{ textDecoration: 'none', color: 'black' }}>Kids </Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
          {localStorage.getItem('auth-token')?<button className='btn btn-outline-danger' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>: <Link to='/login'><button className='btn btn-outline-primary rounded rounded-4 w-100'>Login</button></Link>}       
        <Link to='/cart'> <div className='bi bi-cart fs-4'></div></Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
 
  )
}

export default Navbar;
