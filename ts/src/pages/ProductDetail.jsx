import { React, useState } from "react";
import { Rating } from 'react-simple-star-rating';


export default function ProductDetail() {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    return (
        <div className="site__body">
            <div className="page-header">
                <div className="page-header__container container">
                    <div className="page-header__breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a> <svg className="breadcrumb-arrow"
                                    width="6px" height="9px">
                                    <use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                </svg></li>
                                <li className="breadcrumb-item"><a href="#">Breadcrumb</a> <svg className="breadcrumb-arrow"
                                    width="6px" height="9px">
                                    <use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                </svg></li>
                                <li className="breadcrumb-item active" aria-current="page">Brandix Screwdriver SCREW1500ACC
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="container">
                    <div className="product product--layout--standard" data-layout="standard">
                        <div className="product__content">
                            <div className="product__gallery">
                                <div className="product-gallery">
                                    <div className="product-gallery__featured">
                                        <div className="owl-carousel" id="product-image"><a
                                            href="images/products/product-16.html" target="_blank"><img
                                                src="images/products/product-16.jpg" alt="" /> </a><a
                                                    href="images/products/product-16-1.html" target="_blank"><img
                                                    src="images/products/product-16-1.jpg" alt="" /> </a><a
                                                        href="images/products/product-16-2.html" target="_blank"><img
                                                    src="images/products/product-16-2.jpg" alt="" /> </a><a
                                                        href="images/products/product-16-3.html" target="_blank"><img
                                                    src="images/products/product-16-3.jpg" alt="" /> </a><a
                                                        href="images/products/product-16-4.html" target="_blank"><img
                                                    src="images/products/product-16-4.jpg" alt="" /></a></div>
                                    </div>
                                    <div className="product-gallery__carousel">
                                        <div className="owl-carousel" id="product-carousel"><a href="#"
                                            className="product-gallery__carousel-item"><img
                                                className="product-gallery__carousel-image"
                                                src="images/products/product-16.jpg" alt="" /> </a><a href="#"
                                                    className="product-gallery__carousel-item"><img
                                                    className="product-gallery__carousel-image"
                                                    src="images/products/product-16-1.jpg" alt="" /> </a><a href="#"
                                                        className="product-gallery__carousel-item"><img
                                                    className="product-gallery__carousel-image"
                                                    src="images/products/product-16-2.jpg" alt="" /> </a><a href="#"
                                                        className="product-gallery__carousel-item"><img
                                                    className="product-gallery__carousel-image"
                                                    src="images/products/product-16-3.jpg" alt="" /> </a><a href="#"
                                                        className="product-gallery__carousel-item"><img
                                                    className="product-gallery__carousel-image"
                                                    src="images/products/product-16-4.jpg" alt="" /></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__wishlist-compare"><button type="button"
                                    className="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip"
                                    data-placement="right" title="Wishlist"><svg width="16px" height="16px">
                                        <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                    </svg></button> <button type="button" className="btn btn-sm btn-light btn-svg-icon"
                                        data-toggle="tooltip" data-placement="right" title="Compare"><svg width="16px"
                                            height="16px">
                                            <use xlink:href="images/sprite.svg#compare-16"></use>
                                        </svg></button></div>
                                <h1 className="product__name">Brandix Screwdriver SCREW1500ACC</h1>
                                {/* <div className="product__rating">
                                    <div className="product__rating-stars">
                                        <div className="rating">
                                            <div className="rating__body"><svg className="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g className="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                </g>
                                                <g className="rating__stroke">
                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                </g>
                                            </svg>
                                                <div className="rating__star rating__star--only-edge rating__star--active">
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
                                                        <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                    </g>
                                                </svg>
                                                <div className="rating__star rating__star--only-edge rating__star--active">
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
                                                        <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                    </g>
                                                </svg>
                                                <div className="rating__star rating__star--only-edge rating__star--active">
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
                                                        <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                    </g>
                                                </svg>
                                                <div className="rating__star rating__star--only-edge rating__star--active">
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
                                                        <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                    </g>
                                                </svg>
                                                <div className="rating__star rating__star--only-edge rating__star--active">
                                                    <div className="rating__fill">
                                                        <div className="fake-svg-icon"></div>
                                                    </div>
                                                    <div className="rating__stroke">
                                                        <div className="fake-svg-icon"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="">  
                                    <p>7 đã bán</p>
                                    
                                    </div>
                                </div> */}

                                <ul className="product__meta">
                                    <li>Mã SP: T83690</li>
                                    <li>Thương hiệu: <a href="#">Wakita</a></li>
                                    <li><Rating
                                        onClick={handleRating}
                                        initialValue={5}
                                        size={20}/></li>
                                </ul>
                            </div>
                            <div className="product__sidebar">

                                <div className="product__prices">$1,499.00</div>
                                <form className="product__options">
                                    <div className="form-group product__option"><label className="product__option-label"
                                        for="product-quantity">Số lượng</label>
                                        <div className="product__actions">
                                            <div className="product__actions-item">
                                                <div className="input-number product__quantity"><input id="product-quantity"
                                                    className="input-number__input form-control form-control-lg"
                                                    type="number" min="1" value="1" />
                                                    <div className="input-number__add"></div>
                                                    <div className="input-number__sub"></div>
                                                </div>
                                            </div>
                                            <div className="product__actions-item product__actions-item--addtocart"><button
                                                className="btn btn-primary btn-lg">Thêm vào giỏ</button></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="product-tabs">
                        <div className="product-tabs__list"><a href="#tab-description"
                            className="product-tabs__item product-tabs__item--active">Mô tả</a> <a
                                href="#tab-specification" className="product-tabs__item">Chi tiết</a> <a
                                    href="#tab-reviews" className="product-tabs__item">Đánh giá</a></div>
                        <div className="product-tabs__content">
                            <div className="product-tabs__pane product-tabs__pane--active" id="tab-description">
                                <div className="typography">
                                    <h3>Product Full Description</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
                                        non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
                                        purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales
                                        turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper
                                        felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet
                                        molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis
                                        eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue.
                                        Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante
                                        vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae
                                        tellus.</p>
                                    <h3>Etiam lacus lacus mollis in mattis</h3>
                                    <p>Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis
                                        accumsan. Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus,
                                        vulputate et eros a, rhoncus laoreet orci. Proin sapien neque, commodo at porta
                                        in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et
                                        ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin
                                        nisl molestie eget.</p>
                                    <p>Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec
                                        pretium ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor,
                                        cursus in nulla ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac
                                        est tempus urna tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit
                                        amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt
                                        turpis, sit amet fringilla odio scelerisque non.</p>
                                </div>
                            </div>
                            <div className="product-tabs__pane" id="tab-specification">
                                <div className="spec">
                                    <h3 className="spec__header">Chi tiết</h3>
                                    <div className="spec__section">
                                        <div className="spec__row">
                                            <div className="spec__name">Chất liệu</div>
                                            <div className="spec__value">Aluminium, Plastic</div>
                                        </div>
                                        <div className="spec__row">
                                            <div className="spec__name">Chức năng</div>
                                            <div className="spec__value">Brushless</div>
                                        </div>
                                        <div className="spec__row">
                                            <div className="spec__name">Nguồn điện</div>
                                            <div className="spec__value">18 V</div>
                                        </div>
                                        <div className="spec__row">
                                            <div className="spec__name">Kích thước</div>
                                            <div className="spec__value">Li-lon</div>
                                        </div>
                                        <div className="spec__row">
                                            <div className="spec__name">Bảo hàng</div>
                                            <div className="spec__value">2 <span>tháng</span></div>
                                        </div>
                                        <div className="spec__row">
                                            <div className="spec__name">Đã bán</div>
                                            <div className="spec__value">20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-tabs__pane" id="tab-reviews">
                                <div className="reviews-view">
                                    <div className="reviews-view__list">
                                        <h3 className="reviews-view__header">Khách hàng đánh giá</h3>
                                        <div className="reviews-list">
                                            <ol className="reviews-list__content">
                                                <li className="reviews-list__item">
                                                    <div className="review">
                                                        <div className="review__avatar"><img
                                                            src="images/avatars/avatar-1.jpg" alt="" /></div>
                                                        <div className="review__content">
                                                            <div className="review__author">Samantha Smith</div>
                                                            <div className="review__rating">
                                                                <div className="rating">
                                                                    <div className="rating__body"><svg
                                                                        className="rating__star rating__star--active"
                                                                        width="13px" height="12px">
                                                                        <g className="rating__fill">
                                                                            <use
                                                                                xlink:href="images/sprite.svg#star-normal">
                                                                            </use>
                                                                        </g>
                                                                        <g className="rating__stroke">
                                                                            <use
                                                                                xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg className="rating__star" width="13px"
                                                                            height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                </use>
                                                                            </g>
                                                                        </svg>
                                                                        <div
                                                                            className="rating__star rating__star--only-edge">
                                                                            <div className="rating__fill">
                                                                                <div className="fake-svg-icon"></div>
                                                                            </div>
                                                                            <div className="rating__stroke">
                                                                                <div className="fake-svg-icon"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="review__text">Phasellus id mattis nulla. Mauris
                                                                velit nisi, imperdiet vitae sodales in, maximus ut
                                                                lectus. Vivamus commodo scelerisque lacus, at porttitor
                                                                dui iaculis id. Curabitur imperdiet ultrices fermentum.
                                                            </div>
                                                            <div className="review__date">27 May, 2018</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="reviews-list__item">
                                                    <div className="review">
                                                        <div className="review__avatar"><img
                                                            src="images/avatars/avatar-2.jpg" alt="" /></div>
                                                        <div className="review__content">
                                                            <div className="review__author">Adam Taylor</div>
                                                            <div className="review__rating">
                                                                <div className="rating">
                                                                    <div className="rating__body"><svg
                                                                        className="rating__star rating__star--active"
                                                                        width="13px" height="12px">
                                                                        <g className="rating__fill">
                                                                            <use
                                                                                xlink:href="images/sprite.svg#star-normal">
                                                                            </use>
                                                                        </g>
                                                                        <g className="rating__stroke">
                                                                            <use
                                                                                xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg className="rating__star" width="13px"
                                                                            height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                </use>
                                                                            </g>
                                                                        </svg>
                                                                        <div
                                                                            className="rating__star rating__star--only-edge">
                                                                            <div className="rating__fill">
                                                                                <div className="fake-svg-icon"></div>
                                                                            </div>
                                                                            <div className="rating__stroke">
                                                                                <div className="fake-svg-icon"></div>
                                                                            </div>
                                                                        </div><svg className="rating__star" width="13px"
                                                                            height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                </use>
                                                                            </g>
                                                                        </svg>
                                                                        <div
                                                                            className="rating__star rating__star--only-edge">
                                                                            <div className="rating__fill">
                                                                                <div className="fake-svg-icon"></div>
                                                                            </div>
                                                                            <div className="rating__stroke">
                                                                                <div className="fake-svg-icon"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="review__text">Aenean non lorem nisl. Duis tempor
                                                                sollicitudin orci, eget tincidunt ex semper sit amet.
                                                                Nullam neque justo, sodales congue feugiat ac, facilisis
                                                                a augue. Donec tempor sapien et fringilla facilisis. Nam
                                                                maximus consectetur diam. Nulla ut ex mollis, volutpat
                                                                tellus vitae, accumsan ligula.</div>
                                                            <div className="review__date">12 April, 2018</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="reviews-list__item">
                                                    <div className="review">
                                                        <div className="review__avatar"><img
                                                            src="images/avatars/avatar-3.jpg" alt="" /></div>
                                                        <div className="review__content">
                                                            <div className="review__author">Helena Garcia</div>
                                                            <div className="review__rating">
                                                                <div className="rating">
                                                                    <div className="rating__body"><svg
                                                                        className="rating__star rating__star--active"
                                                                        width="13px" height="12px">
                                                                        <g className="rating__fill">
                                                                            <use
                                                                                xlink:href="images/sprite.svg#star-normal">
                                                                            </use>
                                                                        </g>
                                                                        <g className="rating__stroke">
                                                                            <use
                                                                                xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                                        </div><svg
                                                                            className="rating__star rating__star--active"
                                                                            width="13px" height="12px">
                                                                            <g className="rating__fill">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal">
                                                                                </use>
                                                                            </g>
                                                                            <g className="rating__stroke">
                                                                                <use
                                                                                    xlink:href="images/sprite.svg#star-normal-stroke">
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
                                                            </div>
                                                            <div className="review__text">Duis ac lectus scelerisque quam
                                                                blandit egestas. Pellentesque hendrerit eros laoreet
                                                                suscipit ultrices.</div>
                                                            <div className="review__date">2 January, 2018</div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div className="reviews-list__pagination">
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item disabled"><a
                                                        className="page-link page-link--with-arrow" href="#"
                                                        aria-label="Previous"><svg
                                                            className="page-link__arrow page-link__arrow--left"
                                                            aria-hidden="true" width="8px" height="13px">
                                                            <use
                                                                xlink:href="images/sprite.svg#arrow-rounded-left-8x13">
                                                            </use>
                                                        </svg></a></li>
                                                </ul>
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