import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <Link to='/'>LOGO</Link>
            </div>
            <div>
                <ul className='navbar-items'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/story'>OUR STORY</Link></li>
                    <li><Link to='/shop'>SHOP</Link></li>
                    <li><Link to='/recipes'>RECIPES</Link></li>
                    <li><Link to='/cart' className='navbar-cart'><ShoppingCartIcon className="h-5 w-5 text-gray-500"/>CART</Link></li>
                </ul>
            </div>
        </div>
    )
}