import React, {useState} from 'react';
import './createProduct.css'
import noPhoto from '../../../img/no_img.png'
import {useStore, actions} from '../../../store'



function UpdateComponent({editProduct, setEditProduct }) {
    const [name, setName] = useState(editProduct.id ? editProduct.name: '')
    const [sale, setSale] = useState(editProduct.id ? editProduct.sale: '')
    const [price, setPrice] = useState(editProduct.id ? editProduct.price: '')
    const [quantily, setQuantily] = useState(editProduct.id ?editProduct.quantily: '')
    const [barcode, setBacode] = useState(editProduct.id ? editProduct.barcode: '')
    const [description, setDescription] = useState(editProduct.id ? editProduct.description: '')
    
    const [updateProduct, setUpdateProduct] = useState(editProduct)
    const [state, dispatch] = useStore()
    // useEffect(()=>{

    //     // cleanup function
    //     return ()=>{
    //         if(updateProduct.image){
    //             URL.revokeObjectURL(updateProduct.image.preview)
    //         }
    //     }
    // }, [updateProduct.image])
    const handleUdateImage = (e) =>{
        if(e.target.files){
            const file = e.target.files[0]
            file.preview = URL.createObjectURL(file)
            
            setUpdateProduct({...updateProduct, image: file })  
            
            
            // console.log('updateProduct:', file.preview)
        }
    }
    const handleSetUpdateProduct = (e) =>{
        let updateValues = { ...updateProduct };
        updateValues[e.target.name] = e.target.value;
        setUpdateProduct(updateValues);
    }
    const handleSubmitUpdate = (e) =>{
        e.preventDefault()
        dispatch(actions.updateProduct(updateProduct))
        setName('')
        setPrice('')
        setDescription('')
        setBacode('');
        setQuantily('');
        setSale('')
        setEditProduct({...editProduct, id: null})
        alert('câp nhật thành công!')
        console.log('newProduct:', state.products)
    }
    
  
    
    return (
    <form className="col l-10 m-10 c-12" onSubmit={handleSubmitUpdate}>
        <h1>Cập nhật sản phẩm!</h1>
        <div className="row">

        <div className="col l-5 m-5 c-12">
            <label htmlFor="input-image">
                <span className="label-title">chọn hình ảnh sản phẩm</span>
                <input
                    id="input-image" 
                    type="file" 
                    name="image"
                    className="input-image" 
                    onChange={ e => {
                        handleUdateImage(e)
                        
                    }}
                />
                <div className="box-photo" style={ updateProduct.image ? {backgroundImage: `url(${updateProduct.image.preview})` } : {backgroundImage: `url(${noPhoto})` }}></div>
            </label>
        </div>

        <div className="col l-7 m-7 c-12">
            <label htmlFor="input-name" className="label-title">Tên sản phẩm:</label>
            <input
                className="product-input"
                value={name}
                name='name'
                type="text"
                placeholder="tên sản phẩm"
                onChange={e =>{
                    setName(e.target.value)
                    handleSetUpdateProduct(e)
                }}
            />
            <div className="flex">
                <div className="input-box">
                    <label htmlFor="input-name" className="label-title">Giá sản phẩm:</label>
                    <input
                    className="product-input"
                    value={price}
                    name="price"
                    type="text"
                    placeholder="Giá sản phẩm"
                    onChange={e =>{
                        setPrice(e.target.value)
                        handleSetUpdateProduct(e)
                    }}
                    />
                </div>
                <div className="input-box">             
                    <label htmlFor="input-name" className="label-title mgl-5">Số lượng nhập:</label>
                    <input
                    className="product-input"
                    value={quantily}
                    name="quantily"
                    type="text"
                    placeholder="SL"
                    onChange={e =>{
                        setQuantily(e.target.value)
                        handleSetUpdateProduct(e)
                    }}
                    />
                </div>

            </div>
            <div className="flex">
                <div className="input-box">
                    <label htmlFor="input-sale" className="label-title">Giảm giá(%):</label>
                    <input
                    className="product-input"
                    value={sale}
                    name="sale"
                    type="text"
                    placeholder="% Giảm giá"
                    onChange={e =>{
                        setSale(e.target.value)
                        handleSetUpdateProduct(e)
                        
                    }}
                    /> 
                </div>
                <div className="input-box">
                    <label htmlFor="input-sale" className="label-title mgl-5">Mã sản phẩm:</label>
                    <input
                    className="product-input"
                    value={barcode}
                    name="barcode"
                    type="text"
                    placeholder="mã sản phẩm"
                    onChange={e =>{
                        setBacode(e.target.value);
                        handleSetUpdateProduct(e)
                    }}
                    /> 
                </div>
            </div>      

            <label htmlFor="input-sale" className="label-title">Mô tả sản phẩm:</label>
            <textarea 
                value = {description}
                id="textArea-description"
                className="product-input"
                name="description"
                placeholder="Nội dung mô tả sản phẩm"
                onChange={e =>{
                    setDescription(e.target.value);
                    handleSetUpdateProduct(e)
                }}
            >
            
            </textarea>

            <button className="btn btn--primary" 
            //    onClick={
            //     handleSubmitUpdate()
                
            //    }
            >
                Cập nhật
            </button>
        </div>
        </div>
    </form>

  )
}

export default UpdateComponent;
