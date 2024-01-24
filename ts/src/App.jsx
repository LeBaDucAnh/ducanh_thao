import React, { Fragment, useState, useEffect } from 'react'
import Home from './pages/Home'
import ProductList from './pages/Product';
import DefaultLayout from './layouts/DefaultLayout'
import ProductDetail from './pages/ProductDetail';
import ProductCategory from './pages/Category';
import ScrollToTop from "react-scroll-to-top";
import SocialIcon from './components/IconSocial';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { Tooltip, message  } from 'antd';

function App() {

  const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home, layout: DefaultLayout },
    { path: '/products', component: ProductList, layout: DefaultLayout },
    { path: '/product', component: ProductDetail, layout: DefaultLayout },
    { path: '/cart', component: Cart, layout: DefaultLayout },
    { path: '/category', component: ProductCategory, layout: DefaultLayout}
  ];

  useEffect(() => {
    // Đặt timeout để tự động hiển thị thông báo sau 10 giây
    const intervalId = setInterval(() => {
      message.success('Khách hàng đã mua'); // Hiển thị thông báo xin chào
    }, 30000); // 10 giây

    // // Xóa timeout khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) Layout = route.layout;
              else if (route.layout === null) Layout = Fragment;
              return (
                <Route key={index} path={route.path} element={<Layout ><Page /> </Layout>} />
              );
            })}
          </Routes>
        </BrowserRouter>
        <ScrollToTop smooth style={{ borderRadius: "100px" }}
          width="20"
          height="20"
          color="#f37f12" />
        <SocialIcon/>

      </CartProvider>
    </ProductProvider>
  )
}

export default App

