import React from 'react';
import {FaPencilAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import noAvata from '../../../img/no_avata.png'
import storeIcon from '../../../img/store-icon.png'

function MeCategory() {
  return (
    <div className="me-category col l-2 m-2 c-0">
        <div className="me-category__user">
            <label htmlFor="input-avata" className="me-category__user-avata">
                <div className="category-avata"  style={noAvata ? {backgroundImage: `url(${noAvata})` } : {backgroundImage: `url(${noAvata})` }}></div>
                <input
                    id="input-avata"
                    className="input-avata"
                    type="file"
                />
            </label>
            <div className="me-category__user-name">
                <h3 className="category-name">Luannguyen</h3>
                <span className="me-category__update-profile">
                    <FaPencilAlt/>
                    Sửa hồ sơ
                </span>
            </div>
        </div>
        <ul className="me-category__list">
            <li className="me-category__item me-category__item--active">
                <Link to="/me/store" className="me-category__item-link" >
                    <div className="me-category__item-box">
                        <div className="me-category__item-icon">
                            <img src={storeIcon}/>
                        </div>
                        <span className="me-category__item-name">Quản lý cửa hàng</span>
                    </div>
                </Link>
            </li>
            <li className="me-category__item me-category__item--active">
                <a className="me-category__item-link" href=''>
                    <div className="me-category__item-box">
                        <div className="me-category__item-icon">
                            <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"/>
                        </div>
                        <span className="me-category__item-name">Đơn mua</span>
                    </div>
                </a>
              
            </li>
        </ul>
    </div>
  )
}

export default MeCategory;
