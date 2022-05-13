import React, {useRef, useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const mainNav = [
    {
        display: 'Trang chủ',
        path:"/"
    },
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    }
]

const Header = () => {
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)
    const menuLeftRef = useRef(null)

    const activeMenuLeft = () => menuLeftRef.current.classList.toggle('active')

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if (document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('shrink')
            }
            else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll',null)
        }
    })
    return (
        <div className='header' ref={headerRef}>
            <div className='container'>
                <div className='header__logo'>
                    <Link to="/">MELODY</Link>
                </div>
                <div className='header__menu'>
                    <div className='header__menu__mobile-toggle' onClick={activeMenuLeft}>
                        <MenuIcon className='header__menu__icon'/>
                    </div>
                    <div className='header__menu__left' ref={menuLeftRef}>
                        <div className='header__menu__close' onClick={activeMenuLeft}>
                            <KeyboardArrowLeftIcon className='header__menu__icon'/>
                        </div>
                        {
                            mainNav.map((item,index) => (
                                <div 
                                  key={index} 
                                  className={`header__menu__item header__menu__left__item ${activeNav === index ? 'active' : ''}`}>
                                     <Link to={item.path}>{item.display}</Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className='header__menu__right'>
                         <div className='header__menu__item'>
                             <SearchIcon className='header__menu__icon' />
                         </div>
                         <div className='header__menu__item'>
                             <Link to ='/cart'>
                                 <ShoppingBagOutlinedIcon className='header__menu__icon'/>
                             </Link>
                         </div>
                         <div className='header__menu__item'>
                               <PersonOutlineOutlinedIcon className='header__menu__icon'/>
                         </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header