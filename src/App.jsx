import './App.css'
import Navbar from './Component/Navbar/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Component/Pages/Shop'
import ShopCategory from './Component/Pages/ShopCategory'
import Product from './Component/Pages/Product'
import Cart from './Component/Pages/Cart'
import LoginPage from './Component/Pages/LoginPage'
import Footer from './Component/Footer/Footer'
import kids_banner from './Component/Assets/kids.jpg'
import women_banner from './Component/Assets/wome.jpg'
import men_banner from './Component/Assets/men.jpg'
function App() {
  return (
   <div className='App'>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}></Route>
    <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}></Route>
    <Route path='/womens' element={<ShopCategory banner={women_banner}  category="womens"/>}></Route>
    <Route path='/kids' element={<ShopCategory banner={kids_banner}  category="kid"/>}></Route>
    <Route path='product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}></Route>
    </Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
  
   
   </Routes>
   <Footer/>
   </BrowserRouter>
    

   </div>
     
  )
}

export default App
