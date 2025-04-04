import React, { useState } from 'react'
import "./Lottery.css"

export default function Lottey() {

    const [ticket,setTicket]=useState(0);
      const sum=(t:number)=>{
        const str=""+t+"00";
        const sum=parseInt(str.charAt(0))+parseInt(str.charAt(1))+parseInt(str.charAt(2));
        return sum;
      }

    //   console.log(sum(ticket));

      function getTicket()
      {
        const number=Math.floor(Math.random()*899)+100;
        setTicket(number);
      }
  return (

    <div>
      <h2>Lottery {sum(ticket)==15 ?"'Congratulation' you won!" : ticket!=0 ?"Better Luck next Time":"" }</h2>

      {ticket==0?null:<h5>Lottery Ticket = {ticket}</h5>}
      <button onClick={getTicket}>Get New Ticket</button>
    </div>
  )
}
