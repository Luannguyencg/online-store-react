import React from 'react'
import photoTest from '../../img/no_cart.png'
function NavbarNotify() {
    return (
        <ul className="navbar__notify-list">
            <li className="navbar__notify-item navbar__notify-item--viewed">
                <a href="" className="navbar__notify-item-link">
                    <img src={photoTest} alt="" className="navbar__notify-img"/>
                    <div className="navbar__notify-info">
                        <span className="navbar__notify-name">Mỹ Phẩm Ohui Chính Hãng: Xác thực chính hãng nguồn gốc của sản phẩm Ohui.</span>
                        <span className="navbar__notify-name-sub">Một làn môi căng mền quyến rũ với màu sắc nổi bật luôn là điều mà các quý cô ao ước.</span>
                    </div>    
                </a>
            </li>
            <li className="navbar__notify-item">
                <a href="" className="navbar__notify-item-link">
                    <img src={photoTest} alt="" className="navbar__notify-img"/>
                    <div className="navbar__notify-info">
                        <span className="navbar__notify-name">Mỹ Phẩm Ohui Chính Hãng</span>
                        <span className="navbar__notify-name-sub">Mô Tả Mỹ Phẩm Ohui Chính Hãng</span>
                    </div>    
                </a>
            </li>
            <li className="navbar__notify-item">
                <a href="" className="navbar__notify-item-link">
                    <img src={photoTest} alt="" className="navbar__notify-img"/>
                    <div className="navbar__notify-info">
                        <span className="navbar__notify-name">Mỹ Phẩm Ohui Chính Hãng:Sale sốc bộ sản phẩm Ohui The Fist tái tạo trẻ hóa làn da.</span>
                        <span className="navbar__notify-name-sub">Giá chỉ còn 375.000 (giá gốc 1.250.000 vnd)</span>
                    </div>    
                </a>
            </li>
            
        </ul>
    )
}

export default NavbarNotify
