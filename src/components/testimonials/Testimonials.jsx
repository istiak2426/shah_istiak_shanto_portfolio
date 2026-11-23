import React from 'react'
import './testimonials.css'
import AVTR_RP from '../../assets/rupok.jpg'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore from 'swiper';
import { Pagination } from 'swiper'
import { useLanguage } from '../../context/LanguageContext';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

SwiperCore.use([Pagination]);

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id='testimonials'>
      <h5>{t.testimonials.eyebrow}</h5>
      <h2>{t.testimonials.heading}</h2>

      <Swiper
        className='container testimonials__container'
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {t.testimonials.items.map((d) => {
          const avatarSrc = d.avater || AVTR_RP;
          return (
            <SwiperSlide key={d.id} className='testimonial'>
              <div className='client__avater'>
                <img src={avatarSrc} alt={d.name} referrerPolicy="no-referrer" />
              </div>
              <h5 className='client__name'>{d.name}</h5>
              <small className='client__review'>
                {d.review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials