import React, { useContext, useEffect, useState } from 'react'
import {DeleteFilled} from '@ant-design/icons'
import { CartContext } from '../context/CartContext'

export default function CartBlock({ children }) {

    const {cart, dispatch} = useContext(CartContext)
    const [cartList, setCartList] = useState([])

    useEffect(()=>{
        setCartList(JSON.parse('['+cart+']'));
        console.log(JSON.parse('['+cart+']'));
    },[])

    return (
        <div class="site__body">
            <div class="page-header">
                <div class="page-header__container container">
                    <div class="page-header__breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a> <svg class="breadcrumb-arrow"
                                    width="6px" height="9px">
                                    <use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                </svg></li>
                                <li class="breadcrumb-item"><a href="#">Breadcrumb</a> <svg class="breadcrumb-arrow"
                                    width="6px" height="9px">
                                    <use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                </svg></li>
                                <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="page-header__title">
                        <h1>Shopping Cart</h1>
                    </div>
                </div>
            </div>
            <div class="cart block">
                <div class="container">
                    <table class="cart__table cart-table">
                        <thead class="cart-table__head">
                            <tr class="cart-table__row">
                                <th class="cart-table__column cart-table__column--image">Image</th>
                                <th class="cart-table__column cart-table__column--product">Product</th>
                                <th class="cart-table__column cart-table__column--price">Price</th>
                                <th class="cart-table__column cart-table__column--quantity">Quantity</th>
                                <th class="cart-table__column cart-table__column--total">Total</th>
                                <th class="cart-table__column cart-table__column--remove"></th>
                            </tr>
                        </thead>
                        <tbody class="cart-table__body">
                            {cartList? cartList.map((prd)=>{
                                return <><tr class="cart-table__row">
                                <td class="cart-table__column cart-table__column--image"><a href="#"><img
                                    src="images/products/product-1.jpg" alt="" /></a></td>
                                <td class="cart-table__column cart-table__column--product"><a href="#"
                                    class="cart-table__product-name">{prd.name}</a>
                                    <ul class="cart-table__options">
                                        <li>Color: Yellow</li>
                                        <li>Material: Aluminium</li>
                                    </ul>
                                </td>
                                <td class="cart-table__column cart-table__column--price" data-title="Price">{prd.price}</td>
                                <td class="cart-table__column cart-table__column--quantity" data-title="Quantity">
                                    <div class="input-number"><input class="form-control input-number__input"
                                        type="number" min="1" value="2" />
                                        <div class="input-number__add"></div>
                                        <div class="input-number__sub"></div>
                                    </div>
                                </td>
                                <td class="cart-table__column cart-table__column--total" data-title="Total">$1,398.00
                                </td>
                                <td class="cart-table__column cart-table__column--remove"><button type="button"
                                    class="btn btn-light btn-sm btn-svg-icon"><DeleteFilled style={{fontSize: '24px', color: 'red'}} /></button></td>
                            </tr></>
                            }):""}
                        </tbody>
                    </table>
                    <div class="row justify-content-end pt-5">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <table class="cart__totals">
                                        <tfoot class="cart__totals-footer">
                                            <tr>
                                                <th>Total</th>
                                                <td>$5,902.00</td>
                                                <td style={{width: '30%'}}><a class="btn btn-primary btn-xl btn-block cart__checkout-button" href="checkout.html">Proceed to checkout</a></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}