import React, { ReactNode } from 'react'

interface ILayout{
    children:ReactNode
}

export default function Layout(props:ILayout) {
  return (
    <div className='m-4'>
      {props.children}
    </div>
  )
}
