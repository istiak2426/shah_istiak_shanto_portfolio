import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/style.PNG'
import IMG2 from '../../assets/burger.PNG'
import IMG3 from '../../assets/hotel.PNG'
import IMG4 from '../../assets/photo.PNG'
import IMG5 from '../../assets/health.PNG'
import IMG6 from '../../assets/api2.PNG'


const data = [
  {
    id:1,
    images: IMG1,
    title: "StyleSense E-Commerce App",
    github: "https://github.com/istiak2426/stylesense.git",
    demo:"https://stylesense.netlify.app"
  },
  {
    id:2,
    images: IMG2,
    title: "Burger Builder App",
    github: "https://github.com/istiak2426/burgerbuilder.git",
    demo:"https://burgerbuilder2426.netlify.app"
  },
  {
    id:3,
    images: IMG3,
    title: "Hotel Booking App",
    github: "https://github.com/istiak2426/hotel_booking.git",
    demo:"https://hotelbooking2426.netlify.app"
  },
  {
    id:4,
    images: IMG4,
    title: "Photo Gallery App",
    github: "https://github.com/istiak2426/photogallery2426.git",
    demo:"https://photogallery2426.herokuapp.com"

    
  },
  {
    id:5,
    images: IMG5,
    title: " HealthOS B2B E-Commerce ",
    github: "https://github.com/istiak2426/healthOS-Client.git",
    demo:"https://healthos-final.netlify.app"
  },
  {
    id:6,
    images: IMG6,
    title: "Basic API with JWT Token",
    github: "https://github.com/istiak2426/API_with_JWT.git",
    demo:"https://apiwithadmin.netlify.app/"
  }
]
const Portfolio = () => {
  return (
	<section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>

      {data.map((d)=>{

return (
  <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={d.images} alt="" />
        </div>
        <h3>{d.title}</h3>
        <div className="portfolio__item-cta">
        <a href={d.github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
        <a href={d.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
        </div>
      </article>

)
      })}
      

      
      
    </div>
    </section>
  )
}

export default Portfolio
