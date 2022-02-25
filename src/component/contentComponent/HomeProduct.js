import React from 'react';
import HomeProductItem from './HomeProductItem'
function HomeProduct() {
  return (
        <div className="home-product">
            <div className="grid">
                <div className="row sm-gutter">
                    <HomeProductItem />
                </div>    
            </div>
        </div>
    )
}

export default HomeProduct;
