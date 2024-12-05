import React from 'react'
import Home from './Components/Home'
import Sales from './Components/Sales'
import Category from './Components/Category'
import Sell from './Components/Sell'
import Banner from './Components/Banner'
import Product from './Components/Products'
import Arrival from './Components/Arrival'
import Service from './Components/Services'

const page = () => {
  return (
    <div>
      <Home/>
      <Sales/>
      <Category/>
      <Sell/>
      <Banner/>
      <Product/>
      <Arrival/>
      <Service/>
    </div>
  )
}

export default page
