import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const HeroSliderItem = props => {
  return (
    <div 
        className={`hero-slider__item ${props.active? 'active': ''}`}>
        <div className='hero-slider__item__info'>
             <div className='hero-slider__item__info__title'>
                 <span>{props.item.title}</span>
             </div>
             <div className='hero-slider__item__info__desc'>
                 <span>{props.item.description}</span>
             </div>
             <div className='hero-slider__item__info__btn'>
                 <button className='btn btn--animate'>
                     <span className='btn--animate__txt'>Xem chi tiết</span>
                     <span className='btn--animate__icon-container'><ArrowRightAltIcon className='btn--animate__icon'/></span>
                 </button>
             </div>
        </div>
        <div className='hero-slider__item__image'>
             <img src={props.item.img} alt=''/>
        </div>
    </div>
  )
}

export default HeroSliderItem