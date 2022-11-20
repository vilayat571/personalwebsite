import React, { ReactNode } from 'react'

interface ILayout{
    children:ReactNode
}

export default function Layout(props:ILayout) {
  return (
    <div className='border-2 border-red-500'>
      {props.children}
    </div>
  )
}
