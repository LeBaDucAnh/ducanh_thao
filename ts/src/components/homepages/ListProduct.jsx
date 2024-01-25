import React from "react";
import { InputNumber, Form, Rate } from "antd";
import { RightCircleFilled } from "@ant-design/icons";

export default function ProdList(){
    return(
        <div className="site__body">

            <div className="container">
                <div className="block-header">
                    <h3 className="block-header__title">Bestsellers</h3>
                    <div className="block-header__divider"></div>
                </div>
                <div className="shop-layout shop-layout--sidebar--start">
                    <div className="shop-layout__content">
                        <div className="block">
                            <div className="products-view">
                                <div className="products-view__list products-list" data-layout="grid-3-sidebar"
                                    data-with-features="false">
                                    <div className="products-list__body">
                                        <div className="products-list__item">
                                            <div className="product-card">
                                                <div className="product-card__badges-list">
                                                    <div className="product-card__badge product-card__badge--new">New</div>
                                                </div>
                                                <div className="product-card__image"><a href="product.html"><img
                                                    src="images/products/product-1.jpg" alt="" /></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">Electric
                                                        Planer Brandix KL370090G 300 Watts</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <Rate defaultValue={5} disabled style={{ fontSize: "15px", padding: "0px" }} />
                                                            <p style={{ fontSize: "13px", color: "#b3b3b3" }}>10 đánh giá</p>

                                                        </div>

                                                    </div>
              
                                                </div>
                                                <div className="product-card__actions">
                                                    <div className="product-card__prices">$749.00</div>
                                                    <div className="product-card__buttons"><button
                                                        className="btn btn-primary product-card__addtocart"
                                                        type="button">Thêm vào giỏ</button> <button
                                                            className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                            type="button">Thêm vào giỏt</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="products-list__item">
                                            <div className="product-card">
                                                <div className="product-card__badges-list">
                                                    <div className="product-card__badge product-card__badge--new">New</div>
                                                </div>
                                                <div className="product-card__image"><a href="product.html"><img
                                                    src="images/products/product-1.jpg" alt="" /></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">Electric
                                                        Planer Brandix KL370090G 300 Watts</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <Rate defaultValue={5} disabled style={{ fontSize: "15px", padding: "0px" }} />
                                                            <p style={{ fontSize: "13px", color: "#b3b3b3" }}>10 đánh giá</p>

                                                        </div>

                                                    </div>
              
                                                </div>
                                                <div className="product-card__actions">
                                                    <div className="product-card__prices">$749.00</div>
                                                    <div className="product-card__buttons"><button
                                                        className="btn btn-primary product-card__addtocart"
                                                        type="button">Thêm vào giỏ</button> <button
                                                            className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                            type="button">Thêm vào giỏt</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="products-list__item">
                                            <div className="product-card">
                                                <div className="product-card__badges-list">
                                                    <div className="product-card__badge product-card__badge--new">New</div>
                                                </div>
                                                <div className="product-card__image"><a href="product.html"><img
                                                    src="images/products/product-1.jpg" alt="" /></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">Electric
                                                        Planer Brandix KL370090G 300 Watts</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <Rate defaultValue={5} disabled style={{ fontSize: "15px", padding: "0px" }} />
                                                            <p style={{ fontSize: "13px", color: "#b3b3b3" }}>10 đánh giá</p>

                                                        </div>

                                                    </div>
              
                                                </div>
                                                <div className="product-card__actions">
                                                    <div className="product-card__prices">$749.00</div>
                                                    <div className="product-card__buttons"><button
                                                        className="btn btn-primary product-card__addtocart"
                                                        type="button">Thêm vào giỏ</button> <button
                                                            className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                            type="button">Thêm vào giỏt</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="products-list__item">
                                            <div className="product-card">
                                                <div className="product-card__badges-list">
                                                    <div className="product-card__badge product-card__badge--new">New</div>
                                                </div>
                                                <div className="product-card__image"><a href="product.html"><img
                                                    src="images/products/product-1.jpg" alt="" /></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">Electric
                                                        Planer Brandix KL370090G 300 Watts</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <Rate defaultValue={5} disabled style={{ fontSize: "15px", padding: "0px" }} />
                                                            <p style={{ fontSize: "13px", color: "#b3b3b3" }}>10 đánh giá</p>

                                                        </div>

                                                    </div>
              
                                                </div>
                                                <div className="product-card__actions">
                                                    <div className="product-card__prices">$749.00</div>
                                                    <div className="product-card__buttons">
                                                        <button
                                                        className="btn btn-primary product-card__addtocart"
                                                        type="button">Thêm vào giỏ</button> 
                                                        <button
                                                            className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                            type="button">Thêm vào giỏt</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}