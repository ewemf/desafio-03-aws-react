import React from 'react'
import edit from '../imgs/edit-icon.svg'
import done from '../imgs/done.svg'

const Button = () => {
  return (
    <div className='fixed right-0 mr-8 top-0 mt-12'>
        <div className="mt-12 bg-card_color rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-primary_color">
            <img className='w-8' src={edit} alt="Edit Button" />
        </div>
    </div>
  )
}

export default Button