import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div className='header-container'>
            <div className='header-words'>
                <h1>Cool Korean<br/> Rice Cakes at Home</h1>
                <p>Enjoy one of South Korea's favorite dishes.</p>
                <Link to='/shop'><button className='header-btn'>BUY NOW</button></Link>
            </div>

            <div className='header-img-container'>
                <h1>Image goes here</h1>
            </div>
        </div>
    )
}