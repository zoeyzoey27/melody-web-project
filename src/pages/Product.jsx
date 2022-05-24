import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productData from '../assets/fake-data/products'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

const Product = () => {
  const {id} = useParams()
  const product = productData.getProductById(id)
  const relatedProduct = productData.getProducts(8)
  useEffect(()=> {
     window.scrollTo(0,0)
  },[product])
  return (
    <div>
         <Header/>
         <div className='main'>
            <div className='container'>
                <div className='section'>
                    <ProductView product={product}/>
                </div>
                <div className='section'>
                    <div className='section__title'>Khám phá thêm</div> 
                </div>
                <div className='section__body grid'>
                     {
                        relatedProduct.map(item => (
                          <ProductCard key={item.id} item ={item}/>
                        ))
                     }
                </div>
            </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Product