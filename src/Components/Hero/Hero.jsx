import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For A Better World</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio aperiam, 
        hic iste quis sint exercitationem atque ut? Numquam aperiam rem quaerat 
        amet voluptas facere maxime fugiat cum deserunt necessitatibus.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
