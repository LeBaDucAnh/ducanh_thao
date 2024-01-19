import { createContext, useEffect, useReducer } from "react";

let CartInit = localStorage.getItem('cart') || []

export const CartContext = createContext(CartInit);

const reducer = (cart, payload) => {
    switch (payload.action) {
        case 'ADD_TO_CART':
            const newCart = [...cart, payload.data]
            localStorage.setItem('cart', newCart)
            return newCart

        default:
            cart;
    }
}

export const CartProvider = ({ children }) => {


    const [cart, dispatch] = useReducer(reducer, CartInit);


    return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;

};

