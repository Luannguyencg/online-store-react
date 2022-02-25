import React from 'react';
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa';
import { useStore, useStore2, actions, priceFormat} from '../../store'
import photoTest from '../../img/no_cart.png'
function HomeProductItem() {
    const [state, dispatch] = useStore()
    const products = state.products
    const [state2, dispatch2] = useStore2()
    const productBuy = state2.productBuy
    
    // useEffect(()=>{
        
    // },[])
    
    return (
    products.map((product, index) => (
        
        <div key={index} className="col l-2-4 m-3 c-6 " >
            <Link to={`/${product.name}`} className="product-item" onClick={()=>{
                dispatch2(actions.setProductBuy(product))
                console.log(productBuy)
            }}>
                <div className="product-item__img" style={product.image ?{backgroundImage: `url(${product.image.preview})` }: {backgroundImage: `url(${photoTest})` }}></div>   
                <h4 className="product-item__name">{product.name}</h4>  
                <div className="product-item__price">
                    <span className="product-item__price-old">{priceFormat(Number(product.price), 'đ')}</span>
                    <span className="product-item__price-current">
                        {priceFormat(product.price - (product.sale * product.price / 100), 'đ')}
                    </span>
                </div>
                <div className="product-item__action">
                    <span className="product-item__like product-item__like--focus">
                        <FaHeart className="product-item__icon-no-like"/>
                        <FaHeart className="product-item__icon-focus-like"/>
                    </span>
                    <div className="product-item__rating">
                        <i className="product-item__star--gold fas fa-star"></i>
                        <i className="product-item__star--gold fas fa-star"></i>
                        <i className="product-item__star--gold fas fa-star"></i>
                        <i className="product-item__star--gold fas fa-star"></i>
                        <i className=" fas fa-star"></i>
                    </div>
                    <span className="product-item__sold">
                        88 đã bán
                    </span>

                </div>
                <div className="product-item__origin">
                    <span className="product-item__brand">Whoo</span>
                    <span className="product-item__origin-name">Nhật Bản</span>
                </div>
                <div className="product-item__favourite">
                    <i className="product-item__favourite-icon fas fa-check"></i>
                    <span>Yêu thích</span>
                </div> 
                 
                { product.sale ?
                    <div className="product-item__sale-of">
                        <span className="product-item__sale-of-percent">{`${product.sale}%`}</span>
                        <span className="product-item__sale-of-lable">GIẢM</span>
                    </div> : undefined
                }
                
            </Link>
        </div>
    )) 
     

  
    )
}

export default HomeProductItem;
