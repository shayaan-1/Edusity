import React from 'react'
import './About.css'
import about_png from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
            <img src={about_png} alt="" className='about-png' />
            <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sit officia nobis obcaecati autem nisi nesciunt magnam quae iure consequatur laudantium voluptas.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, iure libero pariatur minus nulla mollitia veniam saepe enim possimus voluptate, laudantium animi aperiam amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default About
