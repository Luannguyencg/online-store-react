import React from 'react'
import {FaSearch, FaCheck, FaAngleDown} from 'react-icons/fa'
function HeaderSearchMobile() {
    return (
        <div>
            <input type="checkbox" hidden id="mobile-search-checkbox" className="header__search-checkbox"/>
            <div className="header__mobile-search">
                <div className="header__search-input-wrap">
                    <input type="text" placeholder="Tìm kiếm sản phẩm " className="header__search-input"/>
                
                    <div className="header__search-history">
                        <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                        <ul className="header__search-history-list">
                            <li className="header__search-history-item">
                                <a href="">Kem dưỡng da</a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="">Kem dưỡng chống nắng</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header__search-select">
                    <span className="header__search-select-lable">Trong shop</span>
                    <FaAngleDown className="header__search-select-icon"/>

                    <ul className="header__search-option">
                        <li className="header__search-option-item header__search-option-item--action">
                            <span>Trong shop</span>
                            <FaCheck className="check-icon"/>
                        </li>
                        <li className="header__search-option-item">
                            <span>Ngoài shop</span>
                            <FaCheck className="check-icon"/>
                        </li>
                    </ul>

                </div>
                <button className="header__search-btn">
                    <FaSearch className="header__search-btn-icon"/>
                </button>
            </div>
            <ul className="header__sort-bar">
                <li className="header__sort-item">
                    <a href="" className="header__sort-link">Liên quan</a>
                </li>
                <li className="header__sort-item header__sort-item--active">
                    <a href="" className="header__sort-link ">Mới nhất</a>
                </li>
                <li className="header__sort-item">
                    <a href="" className="header__sort-link">Bán chạy</a>
                </li>
                <li className="header__sort-item">
                    <a href="" className="header__sort-link">Giá</a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderSearchMobile

