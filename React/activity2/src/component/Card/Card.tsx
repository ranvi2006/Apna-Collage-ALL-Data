import React from 'react'
import "./Card.css"
import Title from '../Title/Title'
import Price from '../Price/Price'

interface Props {
    idx: number
}

export default function Card({ idx }: Props) {

    const oldPrice = ["12,495", "11,900", "1,599", "599"];
    const newPrice = ["8,999", "9,199", "899", "278"];
    const title = ["Logical MX Master", "Apple Pencil(2nd Gen)", "Zebronics", "Petronics"];
    const description = ["8000 DPI 5 Programmale Buttons", "Intutive Touch Surface Designed for iPad Pro", "Designed for iPad Pro Intuitive Touch Surface", "Wireless Mouse 2.4GHz Optical Orientation"];

    return (
        <div className="card">
            <Title
                title={title[idx]}
                description={description[idx]}
            />
            <Price
                oldPrice={oldPrice[idx]}
                newPrice={newPrice[idx]}
            />
        </div>
    )
}
