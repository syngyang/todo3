import React from 'react'
import EditTopic from './EditTopic'
import DeleteTopic from './DeleteTopic'
import Link from 'next/link'

const TodoList = () => {
  return (
    <>
    <div className='flex border border-slate-400 mt-3 py-2 px-6'>
     <div className='flex-1 flex-col'>
      <div className='text-2xl '>Title</div>
      <div>Description</div>
     </div>
      <div className='flex gap-1'>
        <Link href={"/editTopic"}>
          <EditTopic />
        </Link>
        
        <DeleteTopic />
      </div>
    </div>
    </>
  )
}

export default TodoList