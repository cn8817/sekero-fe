import { Link } from 'react-router-dom'
import Button from '../Button'
import RiceCakes from '../../assets/sekero-rice-cakes-diagonal.png'

export default function Hero(){
    return(
        <div className='container flex flex-row justify-between items-center py-16'>
            <div>
                <h1 className='py-5'>Cook Korean<br/> Rice Cakes at Home</h1>
                <p className='pb-8'>Enjoy one of South Korea's favorite dishes.</p>
                <Link to='/shop'><Button  className='py-3'>BUY NOW</Button></Link>
            </div>
                <img src={RiceCakes} className=' max-h-[600px] object-contain'/>
        </div>
    )
}