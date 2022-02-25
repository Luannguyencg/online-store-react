import React, {useState, useEffect} from 'react'
import { useStore, useStore2, actions, priceFormat } from '../../store'
import successIcon from '../../img/success_icon.png'
import {FaStar, FaMinus, FaPlus} from 'react-icons/fa'
import {FcInTransit} from 'react-icons/fc'
import {BsFillCartPlusFill} from 'react-icons/bs'
function ShowProduct() {
  const [qtyProduct, setQtyProduct] = useState(1)
  const [state, dispatch] = useStore()
  const [state2, dispatch2] = useStore2()
  const {productBuy, productCartList} = state2
  console.log('show:',productBuy)
  console.log('cartList',productCartList)
  const handleQtyUp = () => {
    setQtyProduct((prev) => prev + 1)
  }
  const handleQtyDown =() => {
    
    setQtyProduct((prev) =>{
      if(prev > 1){
        return prev - 1
      }
      return prev
    })
  }
  useEffect(()=>{

  },[qtyProduct])

 
  return (
    
    <>
      <div className="col l-5 m-5 c-12">
          <div className="show-product__photo" style={{backgroundImage: `url(${productBuy.image.preview})` }}></div>
      </div>
      <div className="col l-7 m-7 c-12 show-product__ifo">
          <div className="show-product__name">
            <span>{productBuy.name}</span>
            
          </div>
          <div className="flex mgtop-10">
            <div className="flex align-center show-product__rating border-right">
              <div className="show-product__number">5.0</div>
              <div className="show-product__rating-star">
                <FaStar className="show-product__rating-icon"/>
                <FaStar className="show-product__rating-icon"/>
                <FaStar className="show-product__rating-icon"/>
                <FaStar className="show-product__rating-icon"/>
                <FaStar className="show-product__rating-icon"/>
              </div>
            </div>
            <div className="flex align-center pdlr-15 border-right">
              <div className="show-product__number">259</div>
              <div className="show-product__rating-topic">
                Đánh giá
              </div>
            </div>
            <div className="flex align-center pdlr-15 ">
              <div className="show-product__number">653</div>
              <div className="show-product__rating-topic">
                Đã bán
              </div>
            </div>
          </div>
          <div className="flex align-center show-product__price mgtop-10">
            <div className="show-product__price-old">{priceFormat(Number(productBuy.price), 'đ')}</div>
            <div className="show-product__price-current">{priceFormat(productBuy.price - (productBuy.sale * productBuy.price / 100), 'đ')}</div>
            <div className="show-product__sale">{`${productBuy.sale}% giảm`}</div>
          </div>
          <div className="row show-product__transport">
            <div className="col l-3 m-3 c-3">
              <span className="show-product__transport-text">Vận chuyển</span>
            </div>
            <div className="col l-9 m-9 c-9">
              <div className="flex mgbt-5">
                <FcInTransit className="transport-icon"/>
                <div>
                  <span className="show-product__transport-text">Xử lý đơn hàng bởi nhà cung cấp</span>
                </div>
              </div>
              <div className="flex mgbt-5">
                <FcInTransit className="transport-icon"/>
                <div>
                  <span className="show-product__transport-text">Vận chuyển tới</span>
                </div>
              </div>
              <div className="flex mgbt-5">
                <span className="show-product__transport-text" >Phí vận chuyển</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-3 m-3 c-3 align-center">
              <span className="show-product__quantily-text">Số lượng</span>
            </div>
            <div className="col l-9 m-9 c-9">
              <div className="flex align-center">
                <div className="flex qty__box-control">
                  <button className="qty__btn" onClick={handleQtyDown}><FaMinus className="qty__btn-icon"/></button>
                  <span className="qty__number">{qtyProduct}</span>
                  <button className="qty__btn" onClick={handleQtyUp}><FaPlus className="qty__btn-icon"/></button>
                </div>
                <div className="product-available">100 sản phẩm có sẵn</div>
              </div>
            </div>
          </div>
          <button className="add-cart__btn btn btn--primary" type="submit" onClick={(e)=>{
            e.preventDefault();
            dispatch2(actions.addProductCartList({...productBuy, qtyProduct: qtyProduct}))

            const modalElement = document.querySelector('.modal')
            modalElement.style.display = 'block'

            setTimeout(()=>{
              modalElement.style.display = 'none'
            }, 2000)
          }}
          >
            <BsFillCartPlusFill className="add-cart__icon"/> Thêm Vào Giỏ Hàng
          </button>
      </div>

      <div className="modal" 
        onClick={()=>{
          const modalElement = document.querySelector('.modal')
          modalElement.style.display='none'
         
        }}
      >
        <div className="modal__overlay">
          <div className="modal__body">
            <div className="success-icon" >
              <img  className="success-icon__img" src={successIcon} alt=""/>
            </div>
            <div className="notify-text">Sản phẩm đã được thêm vào giỏ hàng</div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default ShowProduct