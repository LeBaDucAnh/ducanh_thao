import React from "react";
import { InputNumber, Form, Rate } from "antd";
import { RightCircleFilled } from "@ant-design/icons";

export default function ProductCategory() {
    return (
        <div className="site__body">
            <div className="page-header">
                <div className="page-header__container container">
                    <div className="page-header__breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Trang chủ</a> 
                                <RightCircleFilled size={20} style={{marginLeft: "15px"}}/></li>
                                <li className="breadcrumb-item"><a href="#">Danh mục</a>
                                <RightCircleFilled size={20} style={{marginLeft: "15px"}}/></li>
                                <li className="breadcrumb-item"><a href="#">Đồ chơi</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="page-header__title">
                        <h1>Tất cả sản phẩm</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="shop-layout shop-layout--sidebar--start">
                    <div className="shop-layout__sidebar">
                        <div className="block block-sidebar">
                            <div className="block-sidebar__item">
                                <div className="widget-filters widget" data-collapse
                                    data-collapse-opened-className="filter--opened">
                                    <h4 className="widget__title">Filters</h4>
                                    <div className="widget-filters__list">
                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" data-collapse-item><button type="button"
                                                className="filter__title" data-collapse-trigger>Nhãn hàng <svg
                                                    className="filter__arrow" width="12px" height="7px">
                                                </svg></button>
                                                <div className="filter__body" data-collapse-content>
                                                    <div className="filter__container">
                                                        <div className="filter-categories">
                                                            <ul className="filter-categories__list">
                                                                <li
                                                                    className="filter-categories__item filter-categories__item--parent">
                                                                    <svg className="filter-categories__arrow" width="6px"
                                                                        height="9px">
                                                                    </svg> <a href="#">Construction & Repair</a>
                                                                    <div className="filter-categories__counter">254</div>
                                                                </li>
                                                                <li
                                                                    className="filter-categories__item filter-categories__item--parent">
                                                                    <svg className="filter-categories__arrow" width="6px"
                                                                        height="9px">
                                                                    </svg>
                                                                    <a href="#">Instruments</a>
                                                                    <div className="filter-categories__counter">75</div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" data-collapse-item>
                                                <div className="filter-price__title">Giá:</div>
                                                <Form labelCol={{ span: 5 }}
                                                    wrapperCol={{ span: 50 }}>
                                                    <Form.Item label="Từ">
                                                        <InputNumber addonAfter="VNĐ" style={{
                                                            width: 180,
                                                        }} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')} />
                                                    </Form.Item>
                                                    <Form.Item label="Đến">
                                                        <InputNumber addonAfter="VNĐ" style={{
                                                            width: 180,
                                                        }} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')} />
                                                    </Form.Item>
                                                </Form>
                                                <div className="filter__body" data-collapse-content>
                                                    <div className="filter__container">
                                                        <div className="filter-price" data-min="500" data-max="1500"
                                                            data-from="590" data-to="1130">
                                                            <div />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-filters__actions d-flex"><button
                                        className="btn btn-primary btn-sm">Lọc</button> <button
                                            className="btn btn-secondary btn-sm ml-2">Bỏ chọn</button></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="shop-layout__content">
                        <div className="block">
                            <div className="products-view">
                                <div className="products-view__options">
                                    <div className="view-options">
                                        <div className="view-options__legend">Hiện 6 trên 98 sản phẩm</div>
                                        <div className="view-options__divider"></div>
                                        <div className="view-options__control"><label for="">Sắp xếp theo</label>
                                            <div><select className="form-control form-control-sm" name="" id="">
                                                <option value="">Mặc định</option>
                                                <option value="">Tên (A-Z)</option>
                                            </select></div>
                                        </div>
                                        <div className="view-options__control"><label for="">Hiện</label>
                                            <div><select className="form-control form-control-sm" name="" id="">
                                                <option value="">12</option>
                                                <option value="">24</option>
                                            </select></div>
                                        </div>
                                    </div>
                                </div>
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
                                <div className="products-view__pagination">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active"><a className="page-link" href="#">2 <span
                                            className="sr-only">(current)</span></a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}