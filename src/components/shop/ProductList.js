import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function ProductList(){
    const queryInfo = useQuery('product', () =>
        axios
        .get('https://43p44fmhh5.execute-api.us-west-1.amazonaws.com/dev/products')
        .then(res => res.data)
    )
    return(
        <div className='flex flex-col items-center mb-10'>
            <p className='text-highlight pt-24 pb-3 uppercase small'>our online store</p>
            <h2 className='pb-10'>Sekero Rice Cakes</h2>
            <div className='container flex flex-row justify-between mb-10'>
                {queryInfo.data?.map(item => {
                    return(
                        <Link to={`/products/${item.id}`}>
                            <div key={item.title}>
                                <div className='bg-base2 px-14 py-10 rounded-lg'>
                                    <img className='max-h-80'src={item.images[0]}/>
                                </div>
                                <div className='flex flex-col justify-between h-40'>
                                    <div className='py-4'>
                                        {/* <div className='flex flex-row pb-3'>
                                            {[...Array(item.stars)].map((e, i) => <img className='max-h-5 pr-3' src={Star} key={i}/>)}
                                        </div> */}
                                        <p>{item.title}</p>
                                        <p>{item.p_desc}</p>
                                    </div>
                                    <div>
                                        <p className='small'>${item.price}</p>
                                        <p className='small'>{item.quantity}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}