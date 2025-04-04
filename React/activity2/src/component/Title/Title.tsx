import React from 'react'
import "./Title.css"

interface Props{
    title:string,
    description:string
}
export default function Title({title,description}:Props) {
  return (
    <div className="title">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}
