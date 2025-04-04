import React, { useState } from 'react'

export default function LudoBoard() {

    const [moves,setMoves]=useState({red:0,green:0,yellow:0,blue:0});
    function updateBlue()
    {
        setMoves((ob)=>{
            return {...ob,blue:ob.blue+1}
        }
        );
    }
    function updateYellow()
    {
        setMoves((ob)=>{
            return {...ob,yellow:ob.yellow+1}
        }
        );
    }
    function updateRed()
    {
        setMoves((ob)=>{
            return {...ob,red:ob.red+1}
        }
        );
    }
    function updateGreen()
    {
        setMoves((ob)=>{
            return {...ob,green:ob.green+1}
        }
        );
    }
    
  return (
    <div>
      <p>Game begin</p>
      <div className="board">
        <p>bule moves={moves.blue}</p>
        <button style={{backgroundColor:"blue",color:"black"}} onClick={updateBlue}>+1</button>
        <p>red moves={moves.red}</p>
        <button style={{backgroundColor:"red" ,color:"black"}}  onClick={updateRed}>+1</button>
        <p>yellow moves={moves.yellow}</p>
        <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
        <p>green moves={moves.green}</p>
        <button style={{backgroundColor:"green", color:"black"}} onClick={updateGreen}>+1</button>
      </div>
    </div>
  )
}
