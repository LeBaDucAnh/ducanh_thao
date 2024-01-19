import { createContext, useContext, useEffect, useState } from "react";


export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProductList() {
            const response = await fetch("http://localhost:3000/products");
            if (!response.ok) {
                throw { message: response.statusText, status: response.status };
            }
            const data = await response.json();
            setProducts(data);
            return data;
        }
    
        getProductList();
    }, []);
    

    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;

};

