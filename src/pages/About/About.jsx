import React from 'react'
import "./About.css"
import aboutImg from "../../images/about-img.jpg"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your ultimate destination for discovering, sharing, and celebrating books. Whether you're an avid reader or just starting your literary journey, we bring you a diverse collection of books across all genres, from timeless classics to the latest bestsellers. At BookHub, we believe in the power of storytelling to connect, inspire, and transform. Our platform offers personalized book recommendations, insightful reviews, and a community of book lovers to share and discuss your reading experiences. Join BookHub and find your next great read today!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
