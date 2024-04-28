import React from 'react'
import Link from 'next/link'
import PlusTopic from './PluseTopic'

const Navbar = () => {
  return (
    <nav className='flex justify-between text-bold px-5 text-2xl items-center'>
      <Link href={"/"}>
        <h1> To do List</h1>
      </Link> 
      <div className='flex gap-2 text-green-500 hover:text-white'>
        <Link href={'/addTopic'}>
         <PlusTopic sized={28} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar