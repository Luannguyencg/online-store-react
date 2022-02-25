import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useStore, actions} from '../../../store'
import UpdateComponent from './UpdateComponent'
function StoreManager() {
 
  const initEditProduct = {
    id: null,
    image: "",
    name: "",
    sale: "",
    price:"",
    quantily: "",
    barcode: "",
    description: "",
  }
  const [state, dispatch] = useStore();
  const [editProduct, setEditProduct] = useState(initEditProduct);
  const  {products, ...rest} = state;
 
  // const handleImage = (e) =>{
  //   if(e.target.files){
  //     const file = e.target.files[0]
  //     file.preview = URL.createObjectURL(file)
  //     setEditProduct({...editProduct, image: file })
  //   }
  // }

  const handleSetupProduct = (e) => {
    let updateValues = { ...editProduct };
    updateValues[e.target.name] = e.target.value;
    setEditProduct(updateValues)
  }
  

  
  
  

  if(editProduct.id){
    return(
      <UpdateComponent
        editProduct={editProduct}
        setEditProduct={setEditProduct}
        
        handleSetupProduct={handleSetupProduct}
        
      /> 
      
      
    )
      
  }

  return (
    <div className="col l-10 m-10 c-12">
      <div className="store-heading">
        <h1 className="store-heading__name">Quản lý cửa hàng</h1>
        <Link to="/creatProduct" className="store-heading__creat-btn btn btn--primary">Thêm sản phẩm</Link>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">stt</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col" style={{width:"80px"}}>SL bán ra</th>
            <th scope="col" style={{width:"80px"}}>SL còn lại</th>
            <th scope="col" colSpan="2" style={{width:"20px"}}>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>

          {products.map((product, index) =>(
            
            <tr key={index}>
              <td scope="row">{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.barcode}</td>
              <td>bán ra</td>
              <td>{product.quantily}</td>
              <td
                style={{width:"50px"}}
                className="update-btn" 
                
                onClick={()=>{
                  setEditProduct(product);
                  console.log('sau khi ấn chỉnh sửa thì:', products)
                }} 
              > 
                
                Cập nhật
              </td>
                
              <td style={{width:"30px"}}
                className="delete-btn" onClick={()=>{dispatch(actions.deleteProduct(index))}}
              > Xoá
              </td>
                
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      
    
  )
}

export default StoreManager;
