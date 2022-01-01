import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'

export default function Navbar(){
    return(
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <h1>LOGO</h1>
            </div>
            <div>
                <ul className='navbar-items'>
                    <li>HOME</li>
                    <li>OUR STORY</li>
                    <li>SHOP</li>
                    <li>RECIPES</li>
                    <li className='navbar-cart'><ShoppingCartIcon className="h-5 w-5 text-gray-500"/>CART</li>
                </ul>
            </div>
        </div>
    )
}