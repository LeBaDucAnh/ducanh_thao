import React from "react";
import { CloseOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function MobileMenu () {
    return (
        <div className="mobilemenu">
        <div className="mobilemenu__backdrop"></div>
        <div className="mobilemenu__body">
            <div className="mobilemenu__header">
                <div className="mobilemenu__title">Menu</div>
                <button type="button" className="mobilemenu__close">
                <CloseOutlined />
                </button>
            </div>
            <div className="mobilemenu__content">
                <ul className="mobile-links mobile-links--level--0" data-collapse
                    data-collapse-opened-class="mobile-links__item--open">
                    <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title">
                            <a href="index.html" className="mobile-links__item-link">Danh mục</a> <button
                                className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                  <CaretDownOutlined />
                                </button>
                        </div>
                        <div className="mobile-links__item-sub-links" data-collapse-content>
                            <ul className="mobile-links mobile-links--level--1">
                                <li className="mobile-links__item" data-collapse-item>
                                    <div className="mobile-links__item-title"><a href="index.html"
                                            className="mobile-links__item-link">Home 1</a></div>
                                </li>
                                <li className="mobile-links__item" data-collapse-item>
                                    <div className="mobile-links__item-title"><a href="index-2.html"
                                            className="mobile-links__item-link">Home 2</a></div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mobile-links__item" data-collapse-item>
                    
                        <div className="mobile-links__item-title"><Link to="/products" href="#" className="mobile-links__item-link">Sản phẩm</Link>
                            <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                </button>
                        </div>
                    </li>
                    <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="shop-grid-3-columns-sidebar.html"
                                className="mobile-links__item-link">Liên hệ</a> <button className="mobile-links__item-toggle"
                                type="button" data-collapse-trigger>
                                </button></div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}