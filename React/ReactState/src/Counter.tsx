import React, { useState } from 'react'

export default function Counter() {

    let [count,setCount]=useState(0);
  function increase()
  {
    setCount(count+1);
  }

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increase}>Increase Count</button>
    </div>
  )
}
