import React from 'react'
import Part from '../Parts/Part'
import "./Ticket.css"

interface Props
{
    digitArray:Array<number>
}
export default function Ticket({digitArray}:Props) {
    
  return (
    <div className='ticket'>
        <h3>Ticket</h3>
        {digitArray.map((arr,idx)=>{
            return <Part n={arr} key={idx}/>
        })}


      
    </div>
  )
}
