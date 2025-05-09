import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
   const [menu,setMenu]=useState("shop");
   const {getTotalCartItems }=useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV37eP6d91xJYv0E3-wPg7AMqarJ8OUHWQA&s' width='60' className='bg-light'></img>
        <p>𝔖𝔥𝔬𝔭-𝔬𝔫</p>
      </div>
      <ul className='nav-menu '>
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none', color:'black'}}>Shop</Link>{ menu==="shop"?<hr/>:<></>} </li>
        <li  onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none',color:'black'}}>Men</Link>{ menu==="mens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none',color:'black'}}>Women </Link>{ menu==="womens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none',color:'black'}}>Kids </Link>{ menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button className='btn btn-outline-dark rounded rounded-4 w-100'>Login</button></Link>
       <Link to='/cart'> <span className='bi bi-cart fs-3'></span> </Link>
        <div className="nav-cart-count  p-2">
        {getTotalCartItems()}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
