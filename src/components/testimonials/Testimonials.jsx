import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/rupok.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore from 'swiper';
import { Pagination } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


SwiperCore.use([Pagination]);


const data = [
  {
    id:1,
    avater: AVTR1,
    name: "StyleSense E-Commerce App",
    review: "Nice work man!",
  },
  {
    id:2,
    avater: AVTR2,
    name: "HealthOS B2B E-Commerce",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias corrupti labore odio at.",
  },
  {
    id:3,
    avater: AVTR3,
    name: "Basic API with JWT Token",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias corrupti labore odio at.",
  },
  {
    id:4,
    avater: AVTR4,
    name: "Burger Builder App",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias corrupti labore odio at.",
  }

]


const Testimonials = () => {
  return (
	<section id='testimonials'>

<h5>Review from clients</h5>
<h2>Testimonials</h2>

<Swiper className='container testimonials__container '
 pagination={{clickable:true}}
 spaceBetween={40}
 slidesPerView={1}>


{data.map((d)=>{
  return (
    <SwiperSlide className='testimonial'>
  <div className='client__avater'>
    <img src={d.avater} alt="Avatar One" />
    
  </div>
  <h5 className='client__name'>{d.name}</h5>
    <small className='client__review'>
      {d.review}
    </small>
</SwiperSlide>
  )
})}

</Swiper>
  </section>
  )
}

export default Testimonials