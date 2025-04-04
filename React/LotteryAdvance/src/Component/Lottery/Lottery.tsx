import React, { useState } from 'react'
import Ticket from '../Ticket/Ticket'
import Winner from '../Winner/Winner';
import "./Lottery.css"


interface Props {
  winNumber: number,
  n: number
}

export default function Lottery({ winNumber, n }: Props) {

  const [digitArray, setDigitArray] = useState(() => giveArray(n));
  const [isWon ,setIsWon]=useState(false);
  // console.log(isWon);
  function giveArray(n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(0);
    }

    
    return arr;
  }

  function getNewTicket(n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {

      arr.push(Math.floor(Math.random() * 10));
    }
    // console.log(arr);
    setDigitArray(arr);
    const sum = arr.reduce((acc, num) => acc + num, 0);
    if(sum==winNumber)
    {
      setIsWon(true);
    }
    else
    {
      setIsWon(false);
    }

  }


  return (
    <div className='lottery'>
      <h1>Lottery</h1>
      {isWon? <Winner/>:<h2>Better luck next time</h2>}
      <Ticket digitArray={digitArray} />
      <button onClick={() => getNewTicket(n)}>get new ticket</button>
    </div>
  )
}
