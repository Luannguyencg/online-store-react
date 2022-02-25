import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useStore2, actions, priceFormat} from '../../../store'
import { TiTick, TiLocation } from 'react-icons/ti'
import { BsTrash } from 'react-icons/bs'

function Cart() {
    const [state2, dispatch2] = useStore2()
    
    const productCartList = state2.productCartList

    const totalProduct = productCartList.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue.qtyProduct
    },0)
    const totalPrice = productCartList.reduce((accumulator, currentValue)=>{
        return accumulator + (currentValue.qtyProduct * (currentValue.price - (currentValue.price * currentValue.sale / 100)))
    },0)
    console.log(totalPrice)
    

    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const handleCheckedAll = () => {
        setIsCheckedAll(!isCheckedAll);
    };
   
    


    
    
    // const handleCheck = (id)=>{
    //     setChecked(prev =>{
    //     const isChecked = checked.includes(id)
    //     if(isChecked){
    //         return checked.filter(item => item !== id)
    //     }else{
    //         return [...prev, id]
    //     }
    //     })
    // }

    
    
   
  return (
    <>
        <div className="col l-8 m-8 c-12">
            <div className="cart-list__header">
                <div className="cart-list__header-main">
                    <div className="checkbox-wrap">
                        <label className="cart-checkbox">
                            {isCheckedAll ?<span className="checkbox-inner">
                                <TiTick className="icon-select"/>
                                
                            </span>: undefined}
                            <input
                                checked={isCheckedAll}
                                className="checkbox-input" 
                                type="checkbox" 
                                name="selectAll"
                                onChange={handleCheckedAll}
                            />
                        </label>
                        CHỌN TẤT CẢ {`(${totalProduct} sản phẩm)`}
                    </div>

                    <div className="cart-list__header-operations">
                        <div className="btn-cart__delete">
                            <BsTrash className="btn-cart__delete-icon"/>
                            <span className="btn-cart__delete-text">Xóa</span>
                        </div>
                    </div>
                </div>
            </div>
            {productCartList.map((productCartItem, index)=>{
                // setQtyProduct(productCartItem.qtyProduct);
                
                return( 
                <div className="cart-product__item" key={index}>
                    <div className="cart-product__item-left">
                        {/* <div>
                            <div className="cart-checkbox">
                                {checked.includes(productCartItem.id) ?<span className="checkbox-inner">
                                    <TiTick className="icon-select"/>
                                    
                                </span>: undefined}
                                <input
                                    name={productCartItem.id}
                                    type="checkbox" 
                                    checked={isCheckedAll ||checked.includes(productCartItem.id)}
                                    className="checkbox-input" 
                                    onChange={()=>handleCheck(productCartItem.id)}
                                />
                            </div>
                        </div> */}
                        

                        <div className="cart-product__img-wrap">
                            <Link to={`/${productCartItem.name}`} className="cart-product__img-link">
                                <img src={productCartItem.image.preview} className="cart-product__item-img"/>
                            </Link>
                        </div>
                        <div className="cart-product__content">
                            <Link to={`/${productCartItem.name}`} className="cart-product__content-link">
                                {productCartItem.name} 
                            </Link>
                            
                            <Link to={`/${productCartItem.name}`} className="cart-product__content-sub-link">
                                No Brand
                            </Link>
                        </div>

                        
                    </div>
                    <div className="cart-product__item-mid">
                        <p className="cart-product__item-price">{priceFormat(productCartItem.price - (productCartItem.sale * productCartItem.price / 100), 'đ')}
                            <span className="cart-product__item-qty">{`x${productCartItem.qtyProduct}`}</span>
                        </p>
                        <div className="cart-product__item-operations">
                            <span className="cart-product__delete-btn"
                                onClick={()=>{
                                    dispatch2(actions.deleteProductCartList(index)) 
                                }}
                            >
                                <BsTrash className="cart-product__delete-btn-icon" />
                            </span>
                        </div>
                    </div>
                    <div className="cart-product__item-right">
                        
                        <div className="cart-product__qty">
                            Số lượng:
                            <span className="cart-product__qty-number">{productCartItem.qtyProduct}</span>
                        </div>
                        {/* <div className="flex qty__box-control">
                            <button className="qty__btn" ><FaMinus className="qty__btn-icon"/></button>
                            <span className="qty__number">{productCartItem.qtyProduct}</span>
                            <button className="qty__btn" ><FaPlus className="qty__btn-icon"/></button>
                        </div> */}
                    
                    </div>
                </div>)
            })}

            <div className="keep-shopping">
                <Link to="/" className="keep-shopping-btn btn">Tiếp tục mua sắm</Link>
            </div>
        </div>
        <div className="col l-4 m-4 c-12">
            <div className="bill-container">
                <div className="summary-section">
                    <div className="location__current">
                        <div className="location__label">
                            Địa điểm
                        </div>
                        <div className="location__body">
                            <TiLocation className="location__icon" />
                            <div className="location__address">
                                Quảng Trị, Huyện Hải Lăng, Xã Hải Quế
                            </div>
                        </div>
                    </div>

                    <div className="summary-section__heading">
                        Thông tin đơn hàng
                    </div>
                    <div className="summary-section__content">
                        <div className="checkout-summary__main">
                            <div className="checkout-summary__label">
                                Tạm tính {`(${totalProduct} sản phẩm)`}
                            </div>
                            <div className="checkout-summary__value">
                                {priceFormat(totalPrice, 'đ')}
                            </div>
                        </div>
                        <div className="checkout-summary__main">
                            <div className="checkout-summary__label">
                                Phí giao hàng 
                            </div>
                            <div className="checkout-summary__value">
                                0 đ
                            </div>
                        </div>

                        <div className="bill-voucher">
                            <div className="bill-voucher-col">
                                <input className="bill-voucher__input" placeholder="Mã giảm giá (Mã giảm giá chỉ áp dụng được một lần)"/>
                            </div>
                            <div className="bill-voucher-col">
                                <button  className="bill-voucher__btn btn">Áp dụng</button>
                            </div>

                        </div>
                        <div className="bill-total">
                            <div className="bill-total__title">
                                Tổng cộng
                            </div>
                            <div className="bill-total__fee">
                                {priceFormat(totalPrice, 'đ')}
                                <small className="bill-total__fee-tip">Đã bao gồm VAT (nếu có)</small>
                            </div>
                        </div>
                        <button className="bill-btn btn btn--primary">XÁC NHẬN GIỎ HÀNG ({totalProduct})</button>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Cart