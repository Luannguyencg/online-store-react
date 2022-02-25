import React from 'react'
import { Link } from 'react-router-dom'
import {useStore2, actions, priceFormat} from '../../store'
import logo1 from '../../img/logo1.png'
import photoTest from '../../img/no_cart.png'
import {FaShoppingCart, FaSearch, FaCheck, FaAngleDown} from 'react-icons/fa'

function HeaderWithSeach() {
    const [state2, dispatch2] = useStore2()
    const productCartList = state2.productCartList
    return (
        <div className="header-with-search">
            <label htmlFor="mobile-search-checkbox" className="header__search-mobile">
                <FaSearch className="header__search-mobile-icon"/>
            </label>
            <div className="header__logo hide-on-tablet">
                <Link to="/" className="header__logo-link">
                    <img src={logo1} alt="" className="header__logo-img"/>
                </Link>
            </div>
            
            <div className="header__search hide-on-mobile">
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
            
            <div className="header__cart">
                <div to="/cart" className="header__cart-box">
                    {productCartList.length > 0 ? <span className="header__cart-notice">{productCartList.length}</span>: undefined }
                    
                    <FaShoppingCart  className="header__cart-icon" />
                    <div className="header__cart-list ">
                        
                         
                        
                        <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                        <ul className="header__cart-list-item">
                            {productCartList.length < 1 ? 
                            <>
                                <img src={photoTest} alt="" className="header__cart-no-cart-img"/>
                                <p className="header__cart-img-sub">Chưa có sản phẩm.</p>
                                <Link to="/" className="keep-shopping-btn btn">Tiếp tục mua sắm</Link>
                            </>: undefined }
                            {/* map cartlist */}
                            {productCartList.map((productCartItem, index) =>(

                                <li className="header__cart-item" key={index}>
                                    <img src={productCartItem.image.preview} alt="" className="header__cart-item-img"/>
                                    <div className="header__cart-item-info">
                                        <div className="header__cart-item-head">
                                            <h5 className="header__cart-item-name">{productCartItem.name}</h5>
                                            <div className="header__cart-item-price-wrap">
                                                <span className="header__cart-item-price">{priceFormat(productCartItem.price - (productCartItem.sale * productCartItem.price / 100), 'đ')}</span>
                                                <span className="header__cart-item-x">X</span>
                                                <span className="header__cart-item-qnt">{productCartItem.qtyProduct}</span>
                                            </div>
                                        </div>
                                        <div className="header__cart-item-body">
                                            <span className="header__cart-item-description">
                                                Phân loại: Bạc
                                            </span>
                                            <span className="header__cart-item-remove"
                                                onClick={()=>{
                                                   dispatch2(actions.deleteProductCartList(index)) 
                                                }}
                                            >Xóa</span>
                                            
                                        </div>
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                        <Link to="/cart"  className="header__cart-view btn btn--primary">Xem giỏ hàng</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderWithSeach
