import React from 'react'
import "./Price.css"

interface Props{
    oldPrice:string,
    newPrice:string
}
export default function Price({oldPrice,newPrice}:Props) {
  return (
    <div className='price'>
     <span><i>{oldPrice}</i></span>&nbsp;&nbsp;&nbsp;<span>{newPrice}</span>
    </div>
  )
}
