import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import Logo from '../assets/sekuro-logo-tablet.png'
export default function Navbar(){
    return(
            <div className='container flex justify-between items-center'>
            <div>
                <Link to='/'><img  className='max-h-16' src={Logo}/></Link>
            </div>
                <ul className='flex'>
                    <li className='px-5'><Link to='/'>HOME</Link></li>
                    <li className='px-5'><Link to='/story'>OUR STORY</Link></li>
                    <li className='px-5'><Link to='/shop'>SHOP</Link></li>
                    <li className='px-5'><Link to='/recipes'>RECIPES</Link></li>
                    <li className='px-5'><Link to='/cart' className='flex'><ShoppingCartIcon className="h-5 w-5 text-gray-500"/>CART</Link></li>
                </ul>
        </div>
    )
}