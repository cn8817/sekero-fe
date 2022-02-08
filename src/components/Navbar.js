import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import Logo from '../assets/sekuro-logo-tablet.png'

export default function Navbar(){
    return(
            <div className='container flex justify-between items-center'>
            <div>
                <Link to='/'><img  className='max-h-16' src={Logo}/></Link>
            </div>
                <ul className='flex text-text-light uppercase'>
                    <li className='px-5'><Link to='/'>home</Link></li>
                    <li className='px-5'><Link to='/our-story'>our story</Link></li>
                    <li className='px-5'><Link to='/products'>shop</Link></li>
                    <li className='px-5'><Link to='/recipes'>recipes</Link></li>
                    <li className='px-5 hover:text-highlight'>
                        <Link to='/cart' className='flex'><ShoppingCartIcon className="h-5 w-5 text-textlight"/>cart</Link>
                    </li>
                    <li className='px-5'>
                        <Link to='/register'>sign up</Link>
                    </li>
                    <li className='px-5'>
                        <Link to='/login'>login</Link>
                    </li>
                </ul>
        </div>
    )
}