
import React from 'react'

interface Props{
    ob:object
    userName:string
    fullName:string,
    email:string,
    password:string
}


export default function UserCard({ob}:Props) {
  
  return (
    <div className='comment' style={{background:"white",color:"black"}}>
        <p>FullName:{ob.fullName}</p>
        <p>UserName:{ob.userName}</p>
        <p>Email:{ob.email}</p>
        <p>Password:{ob.password}</p>
      
    </div>
  )
}
