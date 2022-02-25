import React from 'react';
import {FaAngleLeft, FaAngleRight, FaAngleDown} from 'react-icons/fa'
function Homfilter() {
  return (
    <div className="home-filter hide-on-tablet-mobile">
        <div className="home-filter__total">
            <span className="home-filter__lable">Sắp xếp theo</span>
            <button className="home-filter__total-btn btn btn--primary">Phổ biến</button>
            <button className="home-filter__total-btn btn">Mới nhất</button>
            <button className="home-filter__total-btn btn">Bán chạy</button>

            <div className="select-input">
                <span className="select-input__lable">
                    Giá
                </span>
                <FaAngleDown className="select-input__icon"/>

                {/* <!-- select-option --> */}
                <ul className="select-input__list">
                    <li className="select-input__item">
                        <a href="#" className="select-input__item-link">Giá: Thấp đến cao</a>
                    </li>
                    <li className="select-input__item">
                        <a href="#" className="select-input__item-link">Giá: Cao đến thấp</a>
                    </li>
                </ul>
            </div>
            
        </div>
        <div className="home-filter__paginate">
            <span className="home-filter__paginate-num">
                <span className="home-filter__paginate-current">1</span>
                /
                14
            </span>
            <div className="home-filter__paginate-control">
                <a href="" className="home-filter__paginate-btn home-filter__paginate-btn--disabled">
                    <FaAngleLeft className="home-filter__paginate-icon"/>
                </a>
                <a href="" className="home-filter__paginate-btn">
                    <FaAngleRight className="home-filter__paginate-icon"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Homfilter;
