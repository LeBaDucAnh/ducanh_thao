import React from "react";

export default function ProductCard({ product }) {
    return (
        <div className="block-products__list-item">
            <div className="product-card"><button className="product-card__quickview" type="button"><svg
                width="16px" height="16px">
                <use xlink:href="images/sprite.svg#quickview-16"></use>
            </svg> <span className="fake-svg-icon"></span></button>
                <div className="product-card__badges-list">
                    <div className="product-card__badge product-card__badge--hot">Hot</div>
                </div>
                <div className="product-card__image"><a href="product.html"><img
                    src="images/products/product-2.jpg" alt="" /></a></div>
                <div className="product-card__info">
                    <div className="product-card__name"><a href="product.html">{product.name}</a></div>
                    <div className="product-card__rating">
                        <div className="rating">
                            <div className="rating__body"><svg className="rating__star rating__star--active"
                                width="13px" height="12px">
                                <g className="rating__fill">
                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                </g>
                                <g className="rating__stroke">
                                    <use xlink:href="images/sprite.svg#star-normal-stroke">
                                    </use>
                                </g>
                            </svg>
                                <div
                                    className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                </div><svg className="rating__star rating__star--active" width="13px"
                                    height="12px">
                                    <g className="rating__fill">
                                        <use xlink:href="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                        <use xlink:href="images/sprite.svg#star-normal-stroke">
                                        </use>
                                    </g>
                                </svg>
                                <div
                                    className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                </div><svg className="rating__star rating__star--active" width="13px"
                                    height="12px">
                                    <g className="rating__fill">
                                        <use xlink:href="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                        <use xlink:href="images/sprite.svg#star-normal-stroke">
                                        </use>
                                    </g>
                                </svg>
                                <div
                                    className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                </div><svg className="rating__star rating__star--active" width="13px"
                                    height="12px">
                                    <g className="rating__fill">
                                        <use xlink:href="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                        <use xlink:href="images/sprite.svg#star-normal-stroke">
                                        </use>
                                    </g>
                                </svg>
                                <div
                                    className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                </div><svg className="rating__star rating__star--active" width="13px"
                                    height="12px">
                                    <g className="rating__fill">
                                        <use xlink:href="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                        <use xlink:href="images/sprite.svg#star-normal-stroke">
                                        </use>
                                    </g>
                                </svg>
                                <div
                                    className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                        <div className="fake-svg-icon"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-card__rating-legend">11 Reviews</div>
                    </div>
                    <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                    </ul>
                </div>
                <div className="product-card__actions">
                    <div className="product-card__availability">Availability: <span
                        className="text-success">In Stock</span></div>
                    <div className="product-card__prices">$1,019.00</div>
                    <div className="product-card__buttons"><button
                        className="btn btn-primary product-card__addtocart" type="button">Add To
                        Cart</button> <button
                            className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                            type="button">Add To Cart</button> <button
                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                type="button"><svg width="16px" height="16px">
                                <use xlink:href="images/sprite.svg#wishlist-16"></use>
                            </svg> <span
                                className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                        <button
                            className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                            type="button"><svg width="16px" height="16px">
                                <use xlink:href="images/sprite.svg#compare-16"></use>
                            </svg> <span
                                className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}