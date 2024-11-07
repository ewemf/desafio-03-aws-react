import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Story from '../components/Story'
import Experiences from '../components/Experiences'

const Portfolio = () => {
  return (
    <div className="font-roboto"> 
      <Header /> 
      <div> 
        <Profile /> 
        <Story /> 
        <Experiences />
      </div> 
    </div>
  )
}

export default Portfolio