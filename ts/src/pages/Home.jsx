import React, { useContext, useEffect, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Slideshow from '../components/Slideshow'
import { Rating } from 'react-simple-star-rating'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../context/ProductContext'
import ProductList from '../components/ProductList'
import ProdList from '../components/homepages/ListProduct'
import { BASE_URL } from '../../config'
import axios from 'axios';

function Home() {

    const { products } = useContext(ProductContext)
    const [proList, setProList] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL +'/api/products/').then(res => {
          setProList(res.data);
        })
        .catch(error => {
          console.error('Error fetching products statistics', error);
        });
      }, []);

    console.log("product: ", proList);
    
    return (
        <>
            <div className="block-slideshow block-slideshow--layout--with-departments block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <Slideshow />
                            {/* <img src="images/slides/slide-1.jpg" alt="" className='w-100'/> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="block block-products-carousel" data-layout="grid-4">
                <div className="container">
                    <div className="block-header">
                        <h3 className="block-header__title">SALES</h3>
                        <div className="block-header__divider"></div>
                        <div className="block-header__arrows-list"><button
                            className="block-header__arrow block-header__arrow--left" type="button">
                            <LeftOutlined style={{ fontSize: '20px' }} />
                        </button>
                            <button className="block-header__arrow block-header__arrow--right"
                                type="button">
                                <RightOutlined style={{ fontSize: '20px' }} />
                            </button></div>
                    </div>
                    <div className="block-products-carousel__slider">
                        <div className="block-products-carousel__preloader"></div>
                        <div className="owl-carousel">
                           <div className="block-products-carousel__column">
                                <div className="block-products-carousel__cell">
                                    
                                    <div className="product-card">
                                        <div className="product-card__badges-list">
                                            <div className="product-card__badge product-card__badge--new">New</div>
                                        </div>
                                        <div className="product-card__image"><a href="product.html"><img
                                            src="images/products/product-1.jpg" alt="" /></a></div>
                                        <div className="product-card__info">
                                            <div className="product-card__name"><a href="product.html">áhdadjadajsja</a></div>
                                            <div className="product-card__rating">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
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
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
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
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
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
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
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
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-card__rating-legend">20 lượt mua</div>
                                            </div>
                                        </div>
                                        <div className="product-card__actions">
                                            <div className="product-card__prices">Games</div>
                                            <div className="product-card__prices">$749.00</div>
                                            <div className="product-card__buttons"><button
                                                className="btn btn-primary product-card__addtocart" type="button">Thêm vào giỏ</button> <button
                                                    className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                    type="button">Thêm vào giỏ</button>
                                                <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                    type="button"><svg width="16px" height="16px">
                                                        <use clasxlinkHref="images/sprite.svg#compare-16"></use>
                                                    </svg> <span
                                                        className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="block-products-carousel__column">
                                <div className="block-products-carousel__cell">
                                    <div className="product-card">
                                        <div className="product-card__badges-list">
                                            <div className="product-card__badge product-card__badge--sale">Sale</div>
                                        </div>
                                        <div className="product-card__image"><a href="product.html"><img
                                            src="images/products/product-4.jpg" alt="" /></a></div>
                                        <div className="product-card__info">
                                            <div className="product-card__name"><a href="product.html">Drill Series 3
                                                Br/andix KSR4590PQS 1500 Watts</a></div>
                                            <div className="product-card__rating">
                                                <div className="rating">
                                                    <div className="rating__body"><svg
                                                        className="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g className="rating__fill">
                                                            <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                        </g>
                                                        <g className="rating__stroke">
                                                            <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
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
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
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
                                                        </div><svg className="rating__star rating__star--active"
                                                            width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
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
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div><svg className="rating__star" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use clasxlinkHref="images/sprite.svg#star-normal-stroke">
                                                                </use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-card__rating-legend">7 Lượt mua</div>
                                            </div>

                                        </div>
                                        <div className="product-card__actions">
                                            <div className="product-card__prices"><span
                                                className="product-card__new-price">$949.00</span> <span
                                                    className="product-card__old-price">$1189.00</span></div>
                                            <div className="product-card__buttons"><button
                                                className="btn btn-primary product-card__addtocart" type="button">Thêm vào giỏ</button> <button
                                                    className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                    type="button">Thêm vào giỏ</button> <button
                                                        className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                                        type="button"><svg width="16px" height="16px">
                                                        <use clasxlinkHref="images/sprite.svg#wishlist-16"></use>
                                                    </svg> <span
                                                        className="fake-svg-icon fake-svg-icon--wishlist-16"></span></button>
                                                <button
                                                    className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                                                    type="button"><svg width="16px" height="16px">
                                                        <use clasxlinkHref="images/sprite.svg#compare-16"></use>
                                                    </svg> <span
                                                        className="fake-svg-icon fake-svg-icon--compare-16"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="block block-products block-products--layout--large-first">
                <div className="container">
                    <div className="block-header">
                        <h3 className="block-header__title">Bestsellers</h3>
                        <div className="block-header__divider"></div>
                    </div>
                    <div className="block-products__body">
                        <div className="block-products__list">
                            {proList.map((product, index)=>{
                                return <ProductCard key={product.id} product={product} />
                            })}
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <ProductList/> */}
            {/* <ProdList/> */}
            <div class="container">
            <div className="row">
                    <div className="col-12">
                        <div className="block">
                            <div className="products-view">
                                
                                <div className="products-view__list products-list" data-layout="grid-4-full"
                                    data-with-features="false">
                                    <div className="products-list__body">
                                        {proList.map(pro=>
                                        <div className="products-list__item">
                                            <div className="product-card"><button className="product-card__quickview"
                                                    type="button"><svg width="16px" height="16px">
                                                        <use xlink:href="images/sprite.svg#quickview-16"></use>
                                                    </svg> <span className="fake-svg-icon"></span></button>
                                                    <div className="product-card__badges-list">
                                            <div className="product-card__badge product-card__badge--sale">Sale</div>
                                        </div>
                                                <div className="product-card__image"><a href="product.html"><img
                                                            src={pro.images} alt="" style={{ maxWidth: '229px', maxHeight: '229px', width: '229px', height: 'auto' }}/></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">{pro.name}</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <div className="rating__body"><svg
                                                                    className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                        <use xlink:href="images/sprite.svg#star-normal">
                                                                        </use>
                                                                    </g>
                                                                    <g className="rating__stroke">
                                                                        <use
                                                                            xlink:href="images/sprite.svg#star-normal-stroke">
                                                                        </use>
                                                                    </g>
                                                                </svg>
                                                                <div className="rating__star rating__star--only-edge">
                                                                    <div className="rating__fill">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                    <div className="rating__stroke">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-card__rating-legend">9 Reviews</div>
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
                                                    <div className="product-card__prices"><span
                                                className="product-card__new-price">{pro.price} VNĐ</span> <span
                                                    className="product-card__old-price">{pro.sale_price} VNĐ</span></div>
                                                    <div className="product-card__buttons"><button
                                                            className="btn btn-primary product-card__addtocart"
                                                            type="button">Thêm vào giỏ</button> <button
                                                            className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                                            type="button">Thêm vào giỏ</button> <button
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
                                        </div>)}
                                        {/* <div className="products-list__item">
                                            <div className="product-card"><button className="product-card__quickview"
                                                    type="button"><svg width="16px" height="16px">
                                                        <use xlink:href="images/sprite.svg#quickview-16"></use>
                                                    </svg> <span className="fake-svg-icon"></span></button>
                                                <div className="product-card__badges-list">
                                                    <div className="product-card__badge product-card__badge--hot">Hot</div>
                                                </div>
                                                <div className="product-card__image"><a href="product.html"><img
                                                            src="images/products/product-2.jpg" alt=""/></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">Undefined
                                                            Tool IRadix DPS3000SY 2700 Watts</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <div className="rating__body"><svg
                                                                    className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                            className="btn btn-primary product-card__addtocart"
                                                            type="button">Add To Cart</button> <button
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
                                        <div className="products-list__item">
                                            <div className="product-card"><button className="product-card__quickview"
                                                    type="button"><svg width="16px" height="16px">
                                                        <use xlink:href="images/sprite.svg#quickview-16"></use>
                                                    </svg> <span className="fake-svg-icon"></span></button>
                                                <div className="product-card__image"><a href="product.html"><img
                                                            src="images/products/product-3.jpg" alt=""/></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">Drill
                                                            Screwdriver Brandix ALX7054 200 Watts</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <div className="rating__body"><svg
                                                                    className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                        <use xlink:href="images/sprite.svg#star-normal">
                                                                        </use>
                                                                    </g>
                                                                    <g className="rating__stroke">
                                                                        <use
                                                                            xlink:href="images/sprite.svg#star-normal-stroke">
                                                                        </use>
                                                                    </g>
                                                                </svg>
                                                                <div className="rating__star rating__star--only-edge">
                                                                    <div className="rating__fill">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                    <div className="rating__stroke">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-card__rating-legend">9 Reviews</div>
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
                                                    <div className="product-card__prices">$850.00</div>
                                                    <div className="product-card__buttons"><button
                                                            className="btn btn-primary product-card__addtocart"
                                                            type="button">Add To Cart</button> <button
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
                                        <div className="products-list__item">
                                            <div className="product-card"><button className="product-card__quickview"
                                                    type="button"><svg width="16px" height="16px">
                                                        <use xlink:href="images/sprite.svg#quickview-16"></use>
                                                    </svg> <span className="fake-svg-icon"></span></button>
                                                <div className="product-card__badges-list">
                                                    <div className="product-card__badge product-card__badge--sale">Sale
                                                    </div>
                                                </div>
                                                <div className="product-card__image"><a href="product.html"><img
                                                            src="images/products/product-4.jpg" alt=""/></a></div>
                                                <div className="product-card__info">
                                                    <div className="product-card__name"><a href="product.html">Drill Series
                                                            3 Brandix KSR4590PQS 1500 Watts</a></div>
                                                    <div className="product-card__rating">
                                                        <div className="rating">
                                                            <div className="rating__body"><svg
                                                                    className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                </div><svg className="rating__star rating__star--active"
                                                                    width="13px" height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
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
                                                                        <use xlink:href="images/sprite.svg#star-normal">
                                                                        </use>
                                                                    </g>
                                                                    <g className="rating__stroke">
                                                                        <use
                                                                            xlink:href="images/sprite.svg#star-normal-stroke">
                                                                        </use>
                                                                    </g>
                                                                </svg>
                                                                <div className="rating__star rating__star--only-edge">
                                                                    <div className="rating__fill">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                    <div className="rating__stroke">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                </div><svg className="rating__star" width="13px"
                                                                    height="12px">
                                                                    <g className="rating__fill">
                                                                        <use xlink:href="images/sprite.svg#star-normal">
                                                                        </use>
                                                                    </g>
                                                                    <g className="rating__stroke">
                                                                        <use
                                                                            xlink:href="images/sprite.svg#star-normal-stroke">
                                                                        </use>
                                                                    </g>
                                                                </svg>
                                                                <div className="rating__star rating__star--only-edge">
                                                                    <div className="rating__fill">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                    <div className="rating__stroke">
                                                                        <div className="fake-svg-icon"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-card__rating-legend">7 Reviews</div>
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
                                                    <div className="product-card__prices"><span
                                                            className="product-card__new-price">$949.00</span> <span
                                                            className="product-card__old-price">$1189.00</span></div>
                                                    <div className="product-card__buttons"><button
                                                            className="btn btn-primary product-card__addtocart"
                                                            type="button">Add To Cart</button> <button
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
                                        </div> */}
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default Home

