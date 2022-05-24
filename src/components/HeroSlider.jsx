import React,{useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import HeroSliderItem from './HeroSliderItem'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const HeroSlider = props => {
    const data = props.data
    const timeOut = props.timeOut ? props.timeOut : 5000
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = useCallback (()=> {
        const index = activeSlide + 1  === data.length? 0 : activeSlide+1
        setActiveSlide(index)
    },[activeSlide,data])

    const prevSlide = () => {
        const index = activeSlide - 1 < 0? data.length-1 : activeSlide-1
        setActiveSlide(index)
    }

    useEffect (()=>{
     if (props.auto){
         const slideAuto = setInterval(()=> {
            nextSlide()
         },timeOut)
         return () => {
             clearInterval(slideAuto)
         }
     }
    }, [nextSlide,timeOut,props])

    return (
        <div className='hero-slider'>
            {
                data.map((item,index)=>(
                    <HeroSliderItem key={index} item={item} active={index === activeSlide}/>
                ))
            }
            {
                props.control ? (
                    <div className='hero-slider__control'>
                        <div className='hero-slider__control__item' onClick={prevSlide}>
                            <ChevronLeftIcon className='hero-slider__control__icon'/>
                        </div>
                        <div className='hero-slider__control__item'>
                            {activeSlide+1} / {data.length}
                        </div>
                        <div className='hero-slider__control__item' onClick={nextSlide}>
                            <ChevronRightIcon className='hero-slider__control__icon'/>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

export default HeroSlider