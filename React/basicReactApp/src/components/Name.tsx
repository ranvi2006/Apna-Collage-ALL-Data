import React from 'react'


interface Props {
  name: string;
}
export default function Name({name}:Props) {
  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  )
}
