import React from 'react'
import Product from './Product'

import arqitel from "../assets/videos/arqitel.webm"
import ttr from "../assets/videos/ttr.webm"
import yir from "../assets/videos/yir.webm"
import yahoo from "../assets/videos/yahoo.webm"

const Products = () => {
    const products = [
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: true,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
    ]
  return (
    <div className='w-full bg-zinc-900'>
        {products.map((elem,index)=>
        (
            <Product elem={elem} />
        )
        )}
    </div>
  )
}

export default Products