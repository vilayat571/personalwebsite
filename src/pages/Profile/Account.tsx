import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Account() {

    const navigate=useNavigate()

    const handleClick=()=>{
        localStorage.clear();
        navigate('/')
    }

  return (
    <div>
      <button onClick={()=>handleClick()} className='text-white px-6 py-2'>Logout</button>
    </div>
  )
}
