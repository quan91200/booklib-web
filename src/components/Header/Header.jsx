import React from 'react'
import Navbar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
          <p className='header-text fs-18 fw-3'>Discover the perfect read for every mood and moment. Whether you're seeking adventure, mystery, romance, or self-growth, our curated collection helps you find your next favorite book. With personalized recommendations, in-depth reviews, and easy browsing, we make it simple to explore new genres and authors. Start your reading journey today and unlock stories that will captivate your imagination!</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header