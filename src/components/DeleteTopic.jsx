import React from 'react'
import {BsTrash} from 'react-icons/bs'

const DeleteTopic = () => {
  return (
    <div className='text-red-700 hover:text-red-500'>
      <BsTrash size={24}/>
    </div>
  )
}

export default DeleteTopic