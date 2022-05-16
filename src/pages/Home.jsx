import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'

const Home = () => {
  return (
    <div>
         <Header/>
         <div className='main'>
             <div className='container'>
                 <HeroSlider data = {heroSliderData} control={true} auto = {true}/>
             </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Home