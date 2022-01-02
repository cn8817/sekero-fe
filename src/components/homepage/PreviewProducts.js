import { Link } from 'react-router-dom'
import Button from '../Button'
import Star from '../../assets/star.png'
import Green from '../../assets/sekero-rice-cakes-green.png'
import Red from '../../assets/sekero-tteokbokki-red.png'
import Blue from '../../assets/macaroni-sekero.png'

export default function PreviewProducts(){
    const dummyData = [
        {
            id: 1,
            picture: Green,
            stars: 5,
            product: 'Tteokguk Rice Cakes',
            alt: '(Rice Cake Soup)',
            price: '$9.99',
            weight: '24 oz pack (Pack of 1)'
        },
        {
            id: 2,
            picture: Red,
            stars: 5,
            product: 'Tteokbokki Rice Cakes',
            alt: '(Spicy Stir-Fried Rice Cakes)',
            price: '$9.99',
            weight: '24 oz pack (Pack of 1)'
        },
        {
            id: 3,
            picture: Blue,
            stars: 5,
            product: 'Macaroni Rice Cakes',
            price: '$9.99',
            weight: '24 oz pack (Pack of 1)'
        },
    ]

    return(
        <div className='flex flex-col items-center mb-10'>
            <p className='text-highlight pt-32 pb-3 uppercase small'>our online store</p>
            <h2 className='pb-10'>Sekero Rice Cakes</h2>
            <div className='container flex flex-row justify-between mb-10'>
                {dummyData.map(item => {
                    return(
                            <div>
                                <div className='bg-base2 px-14 py-10 rounded-lg'>
                                    <img className='max-h-80'src={item.picture}/>
                                </div>
                                <div className='flex flex-col justify-between h-40'>
                                    <div className='py-4'>
                                        <div className='flex flex-row pb-3'>
                                            {[...Array(item.stars)].map((e, i) => <img className='max-h-5 pr-3' src={Star} key={i}/>)}
                                        </div>
                                        <p>{item.product}</p>
                                        <p>{item.alt}</p>
                                    </div>
                                    <div>
                                        <p className='small'>{item.price}</p>
                                        <p className='small'>{item.weight}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link to='/shop'><Button className='py-3 uppercase'>view all products</Button></Link>
        </div>
    )
}