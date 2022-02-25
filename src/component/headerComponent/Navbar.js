import React from 'react'
import {Link} from 'react-router-dom'
import NabarNotify from './NavbarNotify'
import {FaFacebookF, FaInstagramSquare, FaBell, FaQuestion} from 'react-icons/fa'
import codeQr from '../../img/code.shoppee.png'
import appStoreQr from '../../img/app_store.png'
import ggPlayQr from '../../img/gg_play.png'
function Navbar() {
    return (
        
        <nav className="navbar hide-on-tablet-mobile">
            <ul className="navbar__list">
                <li className="navbar__item navbar__item--qr navbar__item--separate">
                    Vào cửa hàng trên ứng dụng TickiD
                    <div className="navbar__qr">
                        <img src={codeQr} alt="" className="navbar__qr-code"/>
                        <div className="navbar__qr-apps">
                            <a href="" className="navbar__qr-apps-link">
                                <img src={appStoreQr} alt="" className="navbar__qr-apps-download"/>
                            </a>
                            <a href="" className="navbar__qr-apps-link">
                                <img src={ggPlayQr} alt="" className="navbar__qr-apps-download"/>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="navbar__item">
                    <span className="mavbar__item--no-click">Kết nối</span>
                    <a href="" className="navbar__item-icon">
                        <FaFacebookF className="navbar__item-icon-link" />
                    </a>
                    <a href="" className="navbar__item-icon">
                        <FaInstagramSquare className="navbar__item-icon-link"/>
                    </a>
                    
                </li>
            </ul>
            <ul className="navbar__list">
                <li className="navbar__item navbar__item--to-notify">
                    <a href="" className="navbar__item-link">
                        <FaBell className="navbar__item-icon-link"/>
                        Thông báo
                    </a>
                    <div className="navbar__notify">
                        <header className="navbar__notify-header">
                            <h3>Thông Báo Mới Nhận</h3>
                        </header>
                        <NabarNotify />
                        <div className="navbar__notify-footer">
                            <a href="" className="navbar__notify-footer-link">Xem Tất Cả</a>
                        </div>
                    </div>

                </li>
                <li className="navbar__item">
                    <a href="" className="navbar__item-link">
                        <FaQuestion className="navbar__item-icon-link"/>
                        Trợ giúp
                    </a>
                </li>
                <li className="navbar__item navbar__item--strong navbar__item--separate">Đăng ký</li>
                <li className="navbar__item navbar__item--strong">Đăng nhập  </li>
                <li className="navbar__item navbar__item-user">
                    <img src="./assets/img/user_img.jpg" alt="" className="navbar__user-avt"/>
                    <span className="navbar__user-name">Luannguyen</span>

                    <ul className="navbar__user-menu">
                        <li className="navbar__user-menu-item">
                            <Link to="/me/profile">Tài khoản của tôi</Link>
                        </li>
                        <li className="navbar__user-menu-item">
                            <a href="">Địa chỉ của tôi</a>
                        </li>
                        <li className="navbar__user-menu-item">
                            <a href="">Đơn mua</a>
                        </li>
                        <li className="navbar__user-menu-item navbar__user-menu-item--separate">
                            <a href="">Đăng xuất</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        
    )
}

export default Navbar
