import React from 'react'
import codeQr from '../../img/code.shoppee.png'
import appStoreQr from '../../img/app_store.png'
import ggPlayQr from '../../img/gg_play.png'



function Footer() {
  return (
    <div className="footer">
        <div className="grid wide">
            <div className=" row footer__mobile">
                <div className="col l-2-4 m-3 c-6">
                    <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="/" className="footer__item-link">Trung tâm trợ giúp</a>
                        </li>    
                        <li className="footer__item">
                            <a href="/" className="footer__item-link">Shoppee-Shop</a>
                        </li>    
                        <li className="footer__item">
                            <a href="/" className="footer__item-link">Hướng dẫn mua hàng</a>
                        </li>
                    </ul>
                </div>
                <div className="col l-2-4 m-3 c-6">
                    <h3 className="footer__heading">Giới thiệu</h3>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__item-link">Giới thiệu</a>
                        </li>    
                        <li className="footer__item">
                            <a href="" className="footer__item-link">Tuyển dụng</a>
                        </li>    
                        <li className="footer__item">
                            <a href="" className="footer__item-link">Điều khoản</a>
                        </li>
                    </ul>
                </div>
                <div className="col l-2-4 m-3 c-6">
                    <h3 className="footer__heading">chăm sóc khách hàng</h3>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__item-link">Trung tâm trợ giúp</a>
                        </li>    
                        <li className="footer__item">
                            <a href="" className="footer__item-link">Shoppee-Shop</a>
                        </li>    
                        <li className="footer__item">
                            <a href="" className="footer__item-link">Hướng dẫn mua hàng</a>
                        </li>
                    </ul>
                </div>
                <div className="col l-2-4 m-3 c-6">
                    <h3 className="footer__heading">Theo dõi</h3>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__item-link">
                                <i className="footer__item-icon fab fa-facebook-square"></i>
                                Facebook
                            </a>
                        </li>    
                        <li className="footer__item">
                            <a href="" className="footer__item-link">
                                <i className="footer__item-icon fab fa-instagram"></i>
                                instagram
                            </a>
                        </li>    
                        <li className="footer__item">
                            <a href="" className="footer__item-link">
                                <i className="footer__item-icon fab fa-linkedin"></i>
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col l-2-4 m-8 c-12">
                    <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                    <div className="footer__dowload">
                        <img src={codeQr} alt="Dowload-QR" className="footer__dowload-qr" />
                        <div className="footer__dowload-app">
                            <a href="" className="footer__dowload-app-link">
                                <img src={ggPlayQr} alt="gg play" className="footer__dowload-app-img"/>
                            </a>
                            <a href="" className="footer__dowload-app-link">
                                <img src={appStoreQr} alt="app_store" className="footer__dowload-app-img" />
                            </a>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="footer__bottom">
            <div className="grid">
                <p className="footer__text">2022 - Bản Quyền Thuộc Về Công Ty MyCv</p>
            </div>

        </div>
    </div>
  )
}

export default Footer