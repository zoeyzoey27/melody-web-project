import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import numberWithCommas from '../utils/numberWithCommas'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const ProductView = props => {
    const product = props.product
    const [previewImage, setPreviewImage] = useState(product.image01)
    const [color,setColor] = useState(undefined)
    const [size,setSize] = useState(undefined)
    const [quantity,setQuantity] = useState(1)
    const updateQuantity = type => {
        if (type === 'plus') {
            setQuantity(quantity+1)
        }
        else {
            setQuantity(quantity-1 < 1 ? 1 : quantity-1)
        }
    }
    useEffect(()=> {
        setPreviewImage(product.image01)
        setColor(undefined)
        setSize(undefined)
        setQuantity(1)
    },[product])
    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }
        if (size === undefined) {
            alert('Vui lòng chọn kích thước!')
            return false
        }
        return true
    }
    const addToCart = () => {
        if (check()) {
            console.log({color,size,quantity})
        }
    }
    const navigate = useNavigate()
    const goToCart = () => {
        if (check()) navigate('/cart')
    }
    return (
        <div className='product'>
            <div className='product__images'>
                <div className='product__images__list'>
                    <div className='product__images__list__item' onClick={()=> setPreviewImage(product.image01)}>
                        <img src={product.image01} alt=''/>
                    </div>
                    <div className='product__images__list__item' onClick={()=> setPreviewImage(product.image02)}>
                        <img src={product.image02} alt=''/>
                    </div>
                </div>
                <div className='product__images__main'>
                    <img src={previewImage} alt=''/>
                </div>
            </div>
            <div className='product__info'>
                <h1 className='product__info__name'>{product.name}</h1>
                <div className='product__info__item'>
                    <span className='product__info__item__price'>{numberWithCommas(product.price)} VND</span>
                    {
                        product.price_old !== "" ? <span className='product__info__item__price'><del>{numberWithCommas(product.price_old)} VND</del></span> : null
                    }
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>Màu sắc</div>
                    <div className='product__info__item__list'>
                        {
                            product.color.map((item,index)=>(
                                <div 
                                   className={`product__info__item__list__item ${color === item ? 'active' : ''}`} 
                                   key={index}
                                   onClick={()=>setColor(item)}
                                >
                                   {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>Kích thước</div>
                    <div className='product__info__item__list'>
                        {
                            product.size.map((item,index)=>(
                                <div 
                                   className={`product__info__item__list__item ${size === item ? 'active' : ''}`} 
                                   key={index}
                                   onClick={()=>setSize(item)}
                                >
                                  {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>Số lượng</div>
                    <div className='product__info__item__quantity'>
                        <div className='product__info__item__quantity__btn' onClick={()=>updateQuantity('minus')}>
                            <KeyboardArrowDownIcon className='product__info__item__quantity__btn__icon'/>
                        </div>
                        <div className='product__info__item__quantity__input'>{quantity}</div>
                        <div className='product__info__item__quantity__btn' onClick={()=>updateQuantity('plus')}>
                            <KeyboardArrowUpIcon className='product__info__item__quantity__btn__icon'/>
                        </div>
                    </div>
                </div>
                <div className='product__info__item product__info__btns'>
                    <button className='btn' onClick={addToCart}>Thêm vào giỏ hàng</button>
                    <button className='btn' onClick={goToCart}>Mua ngay</button>
                </div>
                <div className='product__info__item'>
                     <div className='product__info__item__title'>Chi tiết sản phẩm</div>
                     <div className='product__info__item__desc'>{product.description}</div>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView