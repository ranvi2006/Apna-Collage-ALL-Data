import React, { useState } from 'react'

export default function Like() {
    const [isLike, setIsLike] = useState(false);
    const [count, setCount] = useState(0);

    function like() {

        if (isLike) {

            setIsLike(false);
        }
        else {
            setCount((c)=>c+1);
            // setCount((c)=>c+1);
            // setCount((c)=>c+1);
            // setCount((c)=>c+1);
            setIsLike(true);


        }
    }




    return (
        <div>
            <p>Liked={count}</p>
            <p onClick={like}>
                {isLike ? <i style={{ fontSize: "2rem", color: "red" }} className="fa-solid fa-heart"></i>
                    : <i style={{ fontSize: "2rem" }} className="fa-regular fa-heart"></i>
                }

            </p>
        </div>
    )
}
