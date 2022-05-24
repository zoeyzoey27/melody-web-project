import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import PolicyCards from '../components/PolicyCards'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div>
         <Header/>
         <div className='main'>
             <div className='container'>
                 <HeroSlider data = {heroSliderData} control={true} auto = {true} timeOut={6000}/>
                 <PolicyCards/>
                 <div className='section'>
                     <h1 className='section__title'>Sản phẩm nổi bật</h1>
                     <div className='grid section__body'>
                         {
                            productData.getProducts(4).map((item) => (
                                <ProductCard key={item.id} item={item}/>
                            ))
                         }
                     </div>
                 </div>
                 <div className='section'>
                     <h1 className='section__title'>Sản phẩm mới</h1>
                     <div className='grid section__body'>
                         {
                            productData.getProducts(4).map((item) => (
                                <ProductCard key={item.id} item={item}/>
                            ))
                         }
                     </div>
                 </div>
             </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Home