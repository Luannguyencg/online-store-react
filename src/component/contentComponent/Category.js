import React from 'react';
import { Link } from 'react-router-dom'
function Category() {
    return (
        
        
        <div className="category">
            <h3 className="category__heading">
                Danh mục
            </h3>
            <ul className="categoty-list">
                <li className="category-item category-item--active">
                    <Link to="/me/store" className="category-item__link">Quản lý cửa hàng</Link>
                </li>
                <li className="category-item">
                    <Link to="/creatProduct" className="category-item__link">Thêm sản phẩm</Link>
                </li>
                <li className="category-item">
                    <a href="#" className="category-item__link">Trang điểm mặt</a>
                </li>
            </ul>
        </div>
    
       
    );
}

export default Category;
