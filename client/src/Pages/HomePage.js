import React from 'react'
import Carousel from '../Components/Carousel'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Carousel/>
    </div>
  )
}

export default HomePage
