import React, { useState } from 'react'
import UserCard from './UserCard';

export default function Form() {

    const [handleForm, setHandleForm] = useState({ fullName: "", userName: "", email: "", password: "" });
    const [datas,setDatas]=useState([{fullName:"Raju KUmar Mandal",
        userName:"Rajrk2002",
        email:"rajurk2002@gmail.com",
        password:"rajubhai1"
    },]);

    function formHandler(e:React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();

        // console.log(e.target.name);
        const attribute=e.target.name;
        const value=e.target.value;
        setHandleForm((ob)=>{
            return {...ob,[attribute]:value}
        });
    }

    function handleSubmit(e:React.MouseEvent<HTMLButtonElement>)
    {
        e.preventDefault();
        setDatas((datas)=>{
            return [...datas,handleForm]
        });

        setHandleForm({fullName: "", userName: "", email: "", password: "" });
        
        console.log(datas);

       
    }
    return (
        <>
        <form action="">
            <label htmlFor="fullName">FullName:</label>
            <input type="text"
                placeholder='Enter fullName Here'
                id='fullName'
                name="fullName"
                value={handleForm.fullName}
                onChange={formHandler}
                required />
            <br />
            <label htmlFor="userName">UserName:</label>
            <input
                type="text"
                placeholder='Enter username here'
                name="userName" id="userName" value={handleForm.userName}
                onChange={formHandler}
                required />
            <br />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                placeholder='Enter email here'
                name='email'
                id='email'
                value={handleForm.email}
                onChange={formHandler}
                required />
            <br />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                min={6}
                placeholder='enter password'
                name="password"
                id="password"
                value={handleForm.password}
                onChange={formHandler}
                required />
            <br />
            <button type='submit' onClick={handleSubmit}>Submit</button>

        </form>
        {datas.map((ele,idx)=>{

           return <UserCard ob={ele} key={idx}/>
        })}
        </>

    

    )
}
