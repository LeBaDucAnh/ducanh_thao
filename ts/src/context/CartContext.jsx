import { createContext, useContext, useReducer } from "react";

const cartReducers = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products, total: payload.total };
        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products, total: payload.total };
        case "CLEAR_CART":
            return { ...state, cartList: payload.products, total: payload.total };
        default:
            throw new Error("NO case Found");
    }
};


const cartInitialState = {
    cartList: [],
    total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducers, cartInitialState);

    function addToCart(product) {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal,
            },
        });
    }

    function removeFromCart(product) {
        const updatedList = state.cartList.filter((item) => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal,
            },
        });
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0,
            },
        });
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
