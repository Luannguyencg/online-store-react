import React from 'react';
import Category from './Category'
import HomeProduct from './HomeProduct'
import Homefilter from './Homefilter'
import HomePagination from './HomePagination'
import MobileCategory from './MobileCategory'
function Home() {
  return (
      <>
        <div className="col l-2 m-0 c-0">
            <Category />
        </div>
        <div className="col l-10 m-12 c-12">
            <Homefilter />
            <MobileCategory />
            <HomeProduct />
            <HomePagination/>
        </div>  
      </>
  )
}

export default Home;
