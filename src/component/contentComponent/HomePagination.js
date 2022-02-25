import React from 'react'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
function HomePagination() {
  return (
    <ul className="pagination home-product__pagination">
        <li  className="pagination__item">
            <a href="" className="pagination__item-link">
                <FaAngleLeft className="pagination__icon-link" />
            </a>
        </li>
        <li className="pagination__item pagination__item--active">
            <a href="" className="pagination__item-link">1</a>
        </li>
        <li className="pagination__item">
            <a href="" className="pagination__item-link">2</a>
        </li>
        <li className="pagination__item">
            <a href="" className="pagination__item-link">3</a>
        </li>
        <li className="pagination__item">
            <a href="" className="pagination__item-link">4</a>
        </li>
        <li className="pagination__item">
            <a href="" className="pagination__item-link">5</a>
        </li>
        <li className="pagination__item">
            <a href="" className="pagination__item-link">...</a>
        </li>
        <li className="pagination__item">
            <a href="" className="pagination__item-link">14</a>
        </li>
        <li className="pagination__item">
            <a href="" className="pagination__item-link">
                <FaAngleRight className="pagination__icon-link"/>
            </a>
        </li>
    </ul>
  )
}

export default HomePagination