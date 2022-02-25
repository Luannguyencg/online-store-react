import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home'
import Me from './meComponent/Me'
import MyProfile from './meComponent/MyProfile'
import StoreManager from './meComponent/StoreManager'
import CreateProduct from './meComponent/CreateProduct'
import ShowProduct from './ShowProduct';
import Cart from './cartComponent/Cart'
function Content() {
  return(
    <div className="main__content">
        
      <div className="grid wide ">
          <div className=" row sm-gutter content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="me/*" element={<Me  />}>
                <Route path="*" element={<Navigate to="profile"/>} />
                <Route path="profile" element={<MyProfile/>} />
                <Route path="store" element={<StoreManager/>} />
              </Route>
              <Route path="/creatProduct" element={<CreateProduct/>}/>
              <Route path="/cart" element = {<Cart/>}/>
              <Route path="/:nameProduct" element={<ShowProduct/>} />
            </Routes>


          </div>   
      </div>
    </div>
  )
}

export default Content;
