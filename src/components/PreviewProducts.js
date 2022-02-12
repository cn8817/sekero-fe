import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Button from './Button'
import Star from '../assets/star.png'

export default function PreviewProducts(){
    const queryInfo = useQuery('products', () =>
        axios
        .get('https://xatsk8py1i.execute-api.us-west-1.amazonaws.com/dev/products/all')
        .then(res => res.data)
    )

    return(
        <div className='flex flex-col items-center mb-10'>
            <p className='text-highlight pt-24 pb-3 uppercase small'>our online store</p>
            <h2 className='pb-10'>Sekero Rice Cakes</h2>
            <div className='container flex flex-row justify-between mb-10'>
                {queryInfo.data?.map(item => {
                    return(
                        <Link to={`/products/${item.ProductId}`}>
                            <div key={item.ProductId}>
                                <div className='bg-base2 px-14 py-10 rounded-lg'>
                                    <img className='max-h-80'src={item.Image} alt={item.Title}/>
                                </div>
                                <div className='flex flex-col justify-between h-40'>
                                    <div className='py-4'>
                                        <div className='flex flex-row pb-3'>
                                            {[...Array(item.Stars)].map((e, i) => <img className='max-h-5 pr-3' src={Star} key={i}/>)}
                                        </div>
                                        <p>{item.Title}</p>
                                        <p>{item.Alt}</p>
                                        <p>{item.Decription}</p>
                                    </div>
                                    <div>
                                        <p className='small'>${item.Price}</p>
                                        <p className='small'>{item.Weight} oz (Pack of {item.Quantity})</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
                })}
            </div>
            <Link to='/products'><Button className='py-3 uppercase'>view all products</Button></Link>
        </div>
    )
}