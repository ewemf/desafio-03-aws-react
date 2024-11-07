import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Story from '../components/Story'
import Experiences from '../components/Experiences'
import Contact from '../components/Contact'
import Button from '../components/Button'

const Portfolio = () => {
  return (
    <div className="font-roboto"> 
      <Header /> 
      <Button />
      <div> 
        <Profile /> 
        <Story /> 
        <Experiences />
        <Contact />
      </div> 
    </div>
  )
}

export default Portfolio