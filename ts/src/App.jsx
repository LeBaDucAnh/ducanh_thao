import React, { Fragment, useState, useEffect } from 'react'
import Home from './pages/Home'
import ProductList from './pages/Product';
import DefaultLayout from './layouts/DefaultLayout'
import ProductDetail from './pages/ProductDetail';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/Cart';
import { ProductProvider } from './context/ProductContext';

function App() {

  const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home, layout: DefaultLayout },
    { path: '/products', component: ProductList, layout: DefaultLayout },
    { path: '/product', component: ProductDetail, layout: DefaultLayout },
    { path: '/cart', component: Cart, layout: DefaultLayout },
  ];


  return (
    <ProductProvider>
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
    </ProductProvider>
  )
}

export default App

