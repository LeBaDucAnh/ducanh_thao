import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="site__footer">
          <div className="site-footer">
            <div className="container">
              <div className="site-footer__widgets">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="site-footer__widget footer-contacts">
                      {/* <h5 className="footer-contacts__title">Liên hệ</h5> */}
                      {/* <div className="footer-contacts__text">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.</div> */}
                      <ul className="footer-contacts__contacts">
                        <li><i className="footer-contacts__icon fas fa-globe-americas"></i> 715 Fake Street,
                          New York 10021 USA</li>
                        <li><i className="footer-contacts__icon far fa-envelope"></i> stroyka@example.com
                        </li>
                        <li><i className="footer-contacts__icon fas fa-mobile-alt"></i> (800) 060-0730,
                          (800) 060-0730</li>
                        {/* <li><i className="footer-contacts__icon far fa-clock"></i> Mon-Sat 10:00pm - 7:00pm
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-md-12 col-lg-4">
                    <div className="site-footer__widget footer-links">
                      <h5 className="footer-links__title">Thông tin</h5>
                      <ul className="footer-links__list">
                        <li className="footer-links__item"><a href="#" className="footer-links__link">Về chúng tôi</a></li>
                        <li className="footer-links__item"><a href="#" className="footer-links__link">Thông tin vận chuyển</a></li>
                        <li className="footer-links__item"><a href="#" className="footer-links__link">Chính sách bảo mật</a></li>
                        {/* <li className="footer-links__item"><a href="#" className="footer-links__link">Nhãn hàng</a>
                        </li> */}
                        {/* <li className="footer-links__item"><a href="#" className="footer-links__link">Contact
                          Us</a></li> */}
                        <li className="footer-links__item"><a href="#"
                          className="footer-links__link">Hoàn trả</a></li>
                        {/* <li className="footer-links__item"><a href="#" className="footer-links__link">Site
                          Map</a></li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-2">
                    <div className="site-footer__widget footer-links">
                      <h5 className="footer-links__title">My Account</h5>
                      <ul className="footer-links__list">
                        <li className="footer-links__item"><a href="#" className="footer-links__link">Store
                          Location</a></li>
                        <li className="footer-links__item"><a href="#" className="footer-links__link">Order
                          History</a></li>
                        <li className="footer-links__item"><a href="#" className="footer-links__link">Wish
                          List</a></li>
                        <li className="footer-links__item"><a href="#"
                          className="footer-links__link">Newsletter</a></li>
                        <li className="footer-links__item"><a href="#"
                          className="footer-links__link">Specials</a></li>
                        <li className="footer-links__item"><a href="#" className="footer-links__link">Gift
                          Certificates</a></li>
                        <li className="footer-links__item"><a href="#"
                          className="footer-links__link">Affiliate</a></li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* <div className="site-footer__bottom">
                <div className="site-footer__copyright"><a target="_blank"
                  href="https://www.templateshub.net">Templates Hub</a></div>
                <div className="site-footer__payments"><img src="images/payments.png" alt=""/></div>
              </div> */}
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer

