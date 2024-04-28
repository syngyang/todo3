import Link from 'next/link'
import React from 'react'

const AddTopicPage = () => {
  return (
    <div>
       <form className='flex flex-col'>
        <input 
          className='flex-col px-6 py-2 border border-slate-400 mt-2'
          placeholder='제목'
        />
        <textarea rows="5"
          className='flex-col px-6 py-2 border border-slate-400 mt-2'
          placeholder='내용'
        />
        <div className='flex justify-between mt-3 px-3 '>
          <Link href={'/'}>
            <button 
              type="submit"
              className='bg-slate-700 hover:bg-slate-500 w-fit py-2 px-6 font-bold text-white'
              >홈으로
            </button>
          </Link>
          
          <button 
            type="submit"
            className='bg-green-700 hover:bg-green-500 w-fit py-2 px-6 font-bold text-white'
            >추가하기</button>
        </div>
        
      </form>
    </div>
  )
}

export default AddTopicPage