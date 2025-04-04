import React from 'react'
import Card from '../Card/Card'
import "./Product.css"


export default function Product() {


    return (
        
        <>

            <div className="product">
                <Card
                    idx={0}
                />

                <Card idx={1}
                />

                <Card idx={2}
                />

                <Card idx={3}
                />
            </div>
        </>
    )
}
