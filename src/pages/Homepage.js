import React from 'react'
import Hero from '../components/homepage/Hero'
import PreviewProducts from '../components/homepage/PreviewProducts'
import PreviewRecipies from '../components/homepage/PreviewRecipes'

export default function HomePage(){
    return(
        <div>
            <Hero/>
            <PreviewProducts/>
            <PreviewRecipies/>
        </div>
    )
}