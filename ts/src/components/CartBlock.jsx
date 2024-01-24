import React, { useContext, useEffect, useState } from 'react'
import { DeleteFilled } from '@ant-design/icons'
import { CartContext } from '../context/CartContext'
import { Button, Modal, Form, Input } from 'antd';

export default function CartBlock({ children }) {

    const { cart, dispatch } = useContext(CartContext)
    const [cartList, setCartList] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setCartList(JSON.parse('[' + cart + ']'));
        console.log(JSON.parse('[' + cart + ']'));
    }, [])

    return (
        <div class="site__body">
            <div class="page-header">
                <div class="page-header__container container">
                    {/* <div class="page-header__breadcrumb">
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
                    </div> */}
                    <div class="page-header__title">
                        <h1>Giỏ hàng</h1>
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
                            {cartList ? cartList.map((prd) => {
                                return <><tr class="cart-table__row">
                                    <td class="cart-table__column cart-table__column--image"><a href="#"><img
                                        src="images/products/product-1.jpg" alt="" /></a></td>
                                    <td class="cart-table__column cart-table__column--product"><a href="#"
                                        class="cart-table__product-name">{prd.name}</a>
                                        
                                    </td>
                                    <td class="cart-table__column cart-table__column--price" data-title="Đơn giá">{prd.price}</td>
                                    <td class="cart-table__column cart-table__column--quantity" data-title="Số lượng">
                                        <div class="input-number"><input class="form-control input-number__input"
                                            type="number" min="1" value="2" />
                                            <div class="input-number__add"></div>
                                            <div class="input-number__sub"></div>
                                        </div>
                                    </td>
                                    <td class="cart-table__column cart-table__column--total" data-title="Tổng">$1,398.00
                                    </td>
                                    <td class="cart-table__column cart-table__column--remove"><button type="button"
                                        class="btn btn-light btn-sm btn-svg-icon"><DeleteFilled style={{ fontSize: '24px', color: 'red' }} /></button></td>
                                </tr></>
                            }) : ""}
                        </tbody>
                    </table>
                    <div class="row justify-content-end pt-5">
                        <div class="col-12 col-md-7 col-lg-6 col-xl-5">
                            <div class="card">
                                <div class="card-body">
                                    <table class="cart__totals">
                                        
                                        <tfoot class="cart__totals-footer">
                                            <tr>
                                                <th>Tổng tiền</th>
                                                <td>$5,902.00</td>
                                            </tr>
                                        </tfoot>
                                    </table><a class="btn btn-primary btn-xl btn-block cart__checkout-button"
                                        onClick={showModal} style={{color: "white"}}>Đặt hàng</a>
                                </div>
                            </div>
                        </div>
                    </div><source />
                </div>
            </div>
            <Modal title="Thông tin đặt hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
            okText="Đặt hàng" cancelText="Hủy">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Họ và tên"
                        name="fullname"
                        rules={[{ required: true, message: 'Nhập họ và tên!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[{ required: true, message: ' Nhập số điện thoại!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[{ required: true, message: ' Nhập địa chỉ!' }]}
                    >
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}