import React from 'react';

function Category() {
    return (
        
        
        <div className="category">
            <h3 className="category__heading">
                Danh mục
            </h3>
            <ul className="categoty-list">
                <li className="category-item category-item--active">
                    <a href="#" className="category-item__link">Trang điểm mặt</a>
                </li>
                <li className="category-item">
                    <a href="#" className="category-item__link">Trang điểm mặt</a>
                </li>
                <li className="category-item">
                    <a href="#" className="category-item__link">Trang điểm mặt</a>
                </li>
            </ul>
        </div>
    
       
    );
}

export default Category;
