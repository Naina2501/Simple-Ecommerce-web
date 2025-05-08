import React, { useState } from 'react'
import { createContext } from 'react'
import all_product_data from "../Component/Assets/All_product"

export const ShopContext = createContext(null)

const GetDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product_data.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {


    const [cartItems, setCartItem] = useState(GetDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }
    const removeToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }


    const contextValue = { all_product_data,cartItems,addToCart,removeToCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;