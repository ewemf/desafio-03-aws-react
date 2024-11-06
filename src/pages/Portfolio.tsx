import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Story from '../components/Story'

const Portfolio = () => {
  return (
    <div className="font-roboto"> 
      <Header /> 
      <main className="container mx-auto px-4 py-8"> 
        <Profile /> 
        <Story /> 
      </main> 
    </div>
  )
}

export default Portfolio