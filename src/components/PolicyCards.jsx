import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import DiamondIcon from '@mui/icons-material/Diamond'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const PolicyCards = () => {
  return (
    <div className='grid section policy'>
        <div className='policy__col'>
            <div className='policy__col__icon-container'>
                  <ShoppingBagOutlinedIcon className='policy__col__icon'/>
            </div>
            <div className='policy__col__info'>
                <p className='policy__col__info__title'>Miễn phí giao hàng</p>
                <p className='policy__col__info__desc'>Áp dụng đơn hàng trên 1.000.000 VND</p>
            </div>
        </div>
        <div className='policy__col'>
            <div className='policy__col__icon-container'>
                  <CreditCardIcon className='policy__col__icon'/>
            </div>
            <div className='policy__col__info'>
                <p className='policy__col__info__title'>Thanh toán COD</p>
                <p className='policy__col__info__desc'>Thanh toán khi nhận hàng</p>
            </div>
        </div>
        <div className='policy__col'>
            <div className='policy__col__icon-container'>
                  <DiamondIcon className='policy__col__icon'/>
            </div>
            <div className='policy__col__info'>
                <p className='policy__col__info__title'>Khách hàng VIP</p>
                <p className='policy__col__info__desc'>Ưu đãi đặc biệt cho khách hàng VIP</p>
            </div>
        </div>
        <div className='policy__col'>
            <div className='policy__col__icon-container'>
                  <VolunteerActivismIcon className='policy__col__icon'/>
            </div>
            <div className='policy__col__info'>
                <p className='policy__col__info__title'>Hỗ trợ bảo hành</p>
                <p className='policy__col__info__desc'>Hỗ trợ đổi trả tại cửa hàng</p>
            </div>
        </div>
    </div>
  )
}

export default PolicyCards