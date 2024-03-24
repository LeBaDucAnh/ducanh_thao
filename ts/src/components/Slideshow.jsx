import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slideshow() {
    const banners = [
        // Đối với mỗi banner, bạn có thể thêm hình ảnh và nội dung tùy chỉnh
        { id: 1, image: '../images/hpny.jpg', content: '' },
        { id: 2, image: '../images/durex.jpg', content: '' },
        // Thêm các banner khác nếu cần
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };


    return (
        <div className="block-slideshow__body">
            {/* <div className="owl-carousel">
                <a className="block-slideshow__slide" href="#">
                    <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop"></div>
                    <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile"></div>
                    <div className="block-slideshow__slide-content">
                        <div className="block-slideshow__slide-title">Big choice of<br />Plumbing products
                        </div>
                        <div className="block-slideshow__slide-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis
                            molestie.</div>
                        <div className="block-slideshow__slide-button"><span
                            className="btn btn-primary btn-lg">Shop Now</span></div>
                    </div>
                </a>
            </div> */}
            <Slider {...settings}>
      {banners.map((banner) => (
        <div key={banner.id} className="banner-item">
          <img className="imgSlide" src={banner.image} alt={`Banner ${banner.id}`} />
          <div className="banner-content">{banner.content}</div>
        </div>
      ))}
    </Slider>
        </div>
    )
}

export default Slideshow

