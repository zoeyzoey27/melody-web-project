import { Link } from 'react-router-dom'
import React from 'react'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import numberWithCommas from '../utils/numberWithCommas';

const ProductCard = props => {
  return (
    <Link to={`/catalog/${props.item.id}`} className='product-card'>
          <div className='product-card__image'>
              <img src={props.item.image01} alt=''/>
              <img src={props.item.image02} alt=''/>
          </div>
          <h3 className='product-card__name'>{props.item.name}</h3>
          <div className='product-card__price'>
              {numberWithCommas(Number(props.item.price))} VND
              {
                  props.item.price_old !== "" && (
                    <span className='product-card__price--old'>
                       <del>{numberWithCommas(Number(props.item.price_old))} VND</del>
                    </span>
                  )
              }
          </div>
          <div className='product-card__button'>
              <button className='btn btn-sm btn--animate'>
                     <span className='btn--animate__txt'>Xem sản phẩm</span>
                     <span className='btn--animate__icon-container'><AddShoppingCartOutlinedIcon className='btn--animate__icon'/></span>
              </button>
          </div>
    </Link>
  )
}

export default ProductCard