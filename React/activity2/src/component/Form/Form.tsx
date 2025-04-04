import React from 'react'


function submitForm(event:React.FormEvent<HTMLFormElement>)
{
    event.preventDefault();
     console.log("Form was Submitted");
}
export default function Form() {
  return (
   
   <form action="" onSubmit={submitForm}>
    <label htmlFor="name">Name:</label>
    <input type="text" placeholder='Enter Your Name'  id='name'/>
    <br />
    <button >Submit</button>
   </form>
  )
}
