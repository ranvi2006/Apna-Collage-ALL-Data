import React from 'react'
import "./Part.css"

interface Props{
  n:number
  
}
export default function Part({n}:Props) {
  return (
    <span >{n || 0}</span>
  )
}
