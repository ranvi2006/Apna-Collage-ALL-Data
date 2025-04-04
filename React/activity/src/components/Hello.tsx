import React from 'react'

interface Props{
    userName:string,
    textColor:string
}
export default function Hello({userName="Enter User Name4",textColor="blue"}:Props) {

let styles={
    color:textColor
}    
  return (
    <h1 style={styles}>Hello ,{userName}</h1>
  )
}
