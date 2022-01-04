import React from 'react'
import Hero from '../components/homepage/Hero'
import PreviewProducts from '../components/homepage/PreviewProducts'
import PreviewRecipies from '../components/homepage/PreviewRecipes'
import Stores from '../components/homepage/Stores'

export default function HomePage(){
    return(
        <div>
            <Hero/>
            <PreviewProducts/>
            <PreviewRecipies/>
            <Stores/>
        </div>
    )
}