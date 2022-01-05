import React from 'react'
import Hero from '../components/homepage/Hero'
import PreviewProducts from '../components/homepage/PreviewProducts'
import PreviewRecipies from '../components/homepage/PreviewRecipes'
import Stores from '../components/homepage/Stores'
import News from '../components/News'

export default function HomePage(){
    return(
        <div>
            <Hero/>
            <PreviewProducts/>
            <PreviewRecipies/>
            <Stores/>
            <News/>
        </div>
    )
}