import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router-dom'

const footerAboutLink = [
   {
     display: 'Giới thiệu',
     path: '/'
   },
   {
     display: 'Liên hệ',
     path: '/about'
   },
   {
     display: 'Tuyển dụng',
     path: '/'
   },
   {
     display: 'Tin tức',
     path: '/'
   },
   {
     display: 'Hệ thống cửa hàng',
     path: '/'
   }
]

const footerCustomerLink = [
    {
      display: 'FAQ',
      path: '/'
    },
    {
      display: 'Đăng nhập/Đăng ký thành viên',
      path: '/'
    },
    {
      display: 'Hướng dẫn mua hàng trực tuyến',
      path: '/'
    },
    {
      display: 'Chính sách bảo hành',
      path: '/'
    },
    {
      display: 'Đổi/trả & hoàn tiền',
      path: '/'
    },
    {
      display: 'Chính sách bảo mật',
      path: '/'
    },
    {
      display: 'Thanh toán & vận chuyển',
      path: '/'
    }
]
const Footer = () => {
    
    return (
      <div className='footer'>
          <div className='container'>
              <div className='footer__top grid'>
                  <div className='footer__box'>
                      <div className='footer__title'>Tổng đài hỗ trợ</div>
                      <div className='footer__content'>
                          <div className='footer__content__item'>
                              Hotline: <strong>0123456789</strong>
                          </div>
                          <div className='footer__content__item'>
                              Email: <strong>melody@gmail.com</strong>
                          </div>
                          <div className='footer__content__item footer__content__social-media'>
                              Kết nối:  
                              <div className='footer__content__item__social-media'>
                                    <Link to='/' className='footer__content__item__social-media__icon'>
                                        <FacebookRoundedIcon/>
                                    </Link>
                                    <Link to='/' className='footer__content__item__social-media__icon'>
                                        <InstagramIcon/>
                                    </Link>
                                    <Link to='/' className='footer__content__item__social-media__icon'>
                                        <YouTubeIcon/>
                                    </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='footer__box'>
                      <div className='footer__title'>Về Melody</div>
                      <div className='footer__content'>
                          {
                            footerAboutLink.map((item,index) => (
                              <div key={index} className='footer__content__item'>
                                  <Link to={item.path} className='footer__content__link'>{item.display}</Link>
                              </div>
                            ))
                          }
                      </div>
                  </div>
                  <div className='footer__box'>
                      <div className='footer__title'>Chăm sóc khách hàng</div>
                      <div className='footer__content'>
                            {
                              footerCustomerLink.map((item,index) => (
                                <div key={index} className='footer__content__item'>
                                    <Link to={item.path} className='footer__content__link'>{item.display}</Link>
                                </div>
                              ))
                            }
                        </div>
                  </div>
                  <div className='footer__box'>
                      <div className='footer__logo'>MELODY</div>
                      <div className='footer__about'>
                          Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng 
                          triệu người tiêu dùng Việt. Hãy cùng Melody hướng đến một cuộc sống 
                          năng động, tích cực hơn.
                      </div>
                  </div>
              </div>
              <hr/>
              <div className='footer__bottom'>
                  <div className='footer__title'>
                      Công ty cổ phần thương mại MELODY
                  </div> 
                  <div className='footer__copyright'>
                       <div className='footer__copyright__item'>
                          Trụ sở: 19A Đặng Trần Côn, P.Quốc Tử Giám, Q.Đống Đa, Tp.Hà Nội, Việt Nam.
                       </div>
                       <div className='footer__copyright__item'>
                           Văn phòng: Tầng 9, tòa nhà Kim Khí Thăng Long, số 1 Lương Yên, P.Bạch Đằng, Q.Hai Bà Trưng, Tp.Hà Nội, Việt Nam.
                       </div>
                       <div className='footer__copyright__item'>
                           Mã số thuế: 0103469019 do Sở kế hoạch và Đầu tư TP. Hà Nội, cấp lần đầu ngày 02/03/2009, đăng ký thay đổi lần thứ 12 ngày 11/11/2015.
                       </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Footer