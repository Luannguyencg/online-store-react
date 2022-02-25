import React from 'react';
import {useState} from 'react'
import { useStore, actions} from '../../../store'
import './createProduct.css'
import noPhoto from '../../../img/no_img.png'
import { useNavigate } from 'react-router-dom'
function CreateProduct() {
  const navigate =useNavigate()
  const initProduct = {
    id: "",
    image: "",
    name: "",
    sale: "",
    price:"",
    quantily: "",
    barcode: "",
    description: "",
  }
  const [product, setProduct] = useState(initProduct)
  const [state, dispatch] = useStore()
  const  {products, nameInput, saleInput, priceInput, quantilyInput, barcodeInput, decriptionInput} = state

//   useEffect(()=>{
                
//     // cleanup function
//     return ()=>{
//         if(avata){
//             URL.revokeObjectURL(avata.preview)
//         }
//     }
// }, [avata])
  
  const handleImage = (e) =>{
    if(e.target.files){
      const file = e.target.files[0]
      file.preview = URL.createObjectURL(file)
      setProduct({...product, image: file })
      console.log('prev:', product)
    }
  }

  
  const handleSetupProduct = (e) =>{
    let updateValues = { ...product };
    updateValues[e.target.name] = e.target.value;
    setProduct(updateValues);
  }

  const handleAddProduct = () =>{
    product.id = Math.floor(Math.random() * 10000)
    dispatch(actions.addProduct(product));
    dispatch(actions.setNameInput(''))
    dispatch(actions.setPriceInput(''))
    dispatch(actions.setBarcodeInput(''))
    dispatch(actions.setQuantilyInput(''))
    dispatch(actions.setSaleInput(''))
    document.getElementById('textArea-description').value= ''
    alert('Product added successfully')
    navigate(-1)
    
  }

  
  
  console.log('updateValue:',product)
  console.log("danh sách sản phẩm :",products)

  return(
    
    <div className="grid wide">
      <h1>Đăng sản phẩm mới!</h1>
      <div className="row">

        <div className="col l-5 m-5 c-12">
          <label htmlFor="input-image">
            <span className="label-title">chọn hình ảnh sản phẩm</span>
            <input
              id="input-image" 
              type="file" 
              name="input-image"
              className="input-image" 
              onChange={handleImage}
            />
            <div className="box-photo" style={product.image? {backgroundImage: `url(${product.image.preview})` } : {backgroundImage: `url(${noPhoto})` }}></div>
          </label>
        </div>

        <div className="col l-7 m-7 c-12">
          <label htmlFor="input-name" className="label-title">Tên sản phẩm:</label>
          <input
            className="product-input"
            value={nameInput}
            name='name'
            type="text"
            placeholder="tên sản phẩm"
            onChange={e =>{
              dispatch(actions.setNameInput(e.target.value))
              handleSetupProduct(e)
            }}
          />
          <div className="flex">
            <div className="input-box">
              <label htmlFor="input-name" className="label-title">Giá sản phẩm:</label>
              <input
                className="product-input"
                value={priceInput}
                name="price"
                type="text"
                placeholder="tên sản phẩm"
                onChange={e =>{
                  dispatch(actions.setPriceInput(e.target.value))
                  handleSetupProduct(e)
                }}
              />
            </div>
            <div className="input-box">             
              <label htmlFor="input-name" className="label-title mgl-5">Số lượng nhập:</label>
              <input
                className="product-input"
                value={quantilyInput}
                name="quantily"
                type="text"
                placeholder="SL"
                onChange={e =>{
                  dispatch(actions.setQuantilyInput(e.target.value))
                  handleSetupProduct(e)
                }}
              />
            </div>

          </div>
          <div className="flex">
            <div className="input-box">
              <label htmlFor="input-sale" className="label-title">Giảm giá(%):</label>
              <input
                className="product-input"
                value={saleInput}
                name="sale"
                type="text"
                placeholder="% Giảm giá"
                onChange={e =>{
                  dispatch(actions.setSaleInput(e.target.value))
                  handleSetupProduct(e)
                }}
              /> 
            </div>
            <div className="input-box">
              <label htmlFor="input-sale" className="label-title mgl-5">Mã sản phẩm:</label>
              <input
                className="product-input"
                value={barcodeInput}
                name="barcode"
                type="text"
                placeholder="mã sản phẩm"
                onChange={e =>{
                  dispatch(actions.setBarcodeInput(e.target.value))
                  handleSetupProduct(e)
                }}
              /> 
            </div>
          </div>      

          <label htmlFor="input-sale" className="label-title">Mô tả sản phẩm:</label>
          <textarea 
            id="textArea-description"
            className="product-input"
            name="description"
            placeholder="Nội dung mô tả sản phẩm"
            onChange={e =>{
              dispatch(actions.setDescriptionInput(e.target.value))
              handleSetupProduct(e)
            }}
          >
            
          </textarea>

          <span className="btn btn--primary" 
            onClick={
              
              handleAddProduct
            }
          >Thêm sản phẩm</span>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct;
