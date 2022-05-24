import React, { useCallback, useEffect, useRef, useState } from 'react'
import catalog from '../assets/fake-data/catalog'
import colors from '../assets/fake-data/product-colors'
import size from '../assets/fake-data/product-size'
import productData from '../assets/fake-data/products'
import Checkbox from '../components/Checkbox'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const Catalog = () => {
  const initFilter = {
     catalog: [],
     color: [],
     size: [],
  }
  const [filter,setFilter] = useState(initFilter)
  const productsList = productData.getAllProducts()
  const [products,setProducts] = useState(productsList)
  const filterMenuRef = useRef(null)

  const activeFilterMenu = () => filterMenuRef.current.classList.toggle('active')

  const filterSelect = (type, checked, item) => {
      if (checked) {
         switch(type){
            case "CATALOG": 
               setFilter({
                   ...filter,
                   catalog: [
                      ...filter.catalog,
                      item.catalogId
                   ]
               })
               break
            case "COLOR":
              setFilter({
                ...filter,
                color: [
                   ...filter.color,
                   item.display
                ]
              }) 
              break
            case "SIZE": 
              setFilter({
                ...filter,
                size: [
                  ...filter.size,
                  item.size
                ]
              }) 
              break  
            default:   
         }
      }
      else {
          switch(type) {
            case "CATALOG": 
              const newCatalog = filter.catalog.filter(e => e !== item.catalogId)
              setFilter({...filter, catalog: newCatalog})
              break
            case "COLOR": 
              const newColor = filter.color.filter(e => e !== item.display)
              setFilter({...filter, color: newColor})  
              break
            case "SIZE": 
              const newSize = filter.size.filter(e => e !== item.size)
              setFilter ({...filter, size: newSize})  
              break
            default:  
          }
      }
  }
  const updateProducts = useCallback ( () => {
      let temp = productsList
      if (filter.catalog.length > 0){
        temp = temp.filter(e => filter.catalog.includes(e.catalogId))
      }
      if (filter.color.length > 0){
        temp = temp.filter(e => {
           const check = e.color.find(color => filter.color.includes(color))
           return check !== undefined
        })
      }
      if (filter.size.length > 0){
        temp = temp.filter(e => {
          const check = e.size.find(size => filter.size.includes(size))
          return check !== undefined
        })
      }
      setProducts(temp)
  }, [filter,productsList])

  useEffect (()=> {
    updateProducts()
  },[updateProducts])

  const clearFilter = () => {
    setFilter(initFilter)
  }
  return (
    <div>
    {console.log(filter)}
        <Header/>
        <div className='main'>
            <div className='catalog container'>
                <button className='btn btn--sm catalog__btn' onClick={activeFilterMenu}>Bộ lọc</button>
                <div className='catalog__filter' ref={filterMenuRef}>
                    <ChevronLeftIcon className='catalog__filter__close' onClick={activeFilterMenu}/>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__title'>Danh mục sản phẩm</div>
                        <div className='catalog__filter__widget__content'>
                            {
                              catalog.map(item=>(
                                 <div className='catalog__filter__widget__content__item' key={item.catalogId}>
                                     <Checkbox 
                                         label={item.catalogName} 
                                         onChange = {input => filterSelect("CATALOG",input.checked,item)}
                                         checked = {filter.catalog.includes(item.catalogId)}
                                      ></Checkbox>
                                 </div>
                              ))
                            }
                        </div>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__title'>Màu sắc</div>
                        <div className='catalog__filter__widget__content'>
                            {
                              colors.map((item,index)=>(
                                 <div className='catalog__filter__widget__content__item' key={index}>
                                     <Checkbox 
                                        label={item.display} 
                                        onChange = {input => filterSelect("COLOR",input.checked,item)}
                                        checked = {filter.color.includes(item.display)}
                                      ></Checkbox>
                                 </div>
                              ))
                            }
                        </div>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__title'>Kích thước</div>
                        <div className='catalog__filter__widget__content'>
                            {
                              size.map((item,index)=>(
                                 <div className='catalog__filter__widget__content__item' key={index}>
                                     <Checkbox 
                                         label={item.display} 
                                         onChange = {input => filterSelect("SIZE",input.checked,item)}
                                         checked = {filter.size.includes(item.size)}
                                      ></Checkbox>
                                 </div>
                              ))
                            }
                        </div>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__content'>
                            <button className='btn btn--sm' onClick={clearFilter}>Xóa bộ lọc</button>
                        </div>
                    </div>
                </div>
                <div className='catalog__content grid'>
                    {
                       products.map(item => (
                         <ProductCard key={item.id} item={item}/>
                       ))
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Catalog