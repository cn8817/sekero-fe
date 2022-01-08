import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductData } from '../hooks/queries/useProductData'
import { useParams } from 'react-router-dom'
import Button from './Button'
import Badges from '../assets/description-badges.png'
import Accordian from './Accordion'

export default function Product(){
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const { data } = useProductData(id)

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleSubtract = () => {
        setQuantity(quantity - 1)
    }

    const accordionData = [
        {
          title: 'Ingredients',
          content: `rice, salt, and water.`
        },
        {
          title: 'Storage and Cooking',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
        },
        {
          title: 'Shipping & Return Policy',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
      ];

    return(
        <div className='container my-10'>
            <ul className='flex flex-row small'>
                <li><Link to='/'>Home</Link></li>
                <li>/</li>
                <li><Link to='/products'>Products</Link></li>
                <li>/</li>
                <li>{data?.data.title}</li>
            </ul>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <img src={data?.data.images[0]} className='max-w-lg max-h-80 object-contain'/>
                    <div>
                        <ul className='flex flex-row'>
                            {data?.data.images.map(image => {
                                return(
                                <li><img src={image} className='max-w-xs max-h-36'/></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='pr-60'>
                    <h3 className='mb-3'>{data?.data.title}</h3>
                    <p className='mb-3'>{data?.data.quantity}</p>
                    <p className='mb-3'>${data?.data.price}</p>
                    <div className='flex flex-row border-2 border-black justify-evenly max-w-[6rem] rounded-lg mb-6'>
                        <button disabled={quantity > 1 ? false : true}onClick={handleSubtract}>-</button>
                        <p>{quantity}</p>
                        <button onClick={handleAdd}>+</button>
                    </div>
                    <Button className='flex mb-6'>add to cart</Button>
                    <Button variant='secondary' className='flex justify-center mb-6'>buy now</Button>
                    <p>{data?.data.p_desc}</p>
                    <img src={Badges} className='max-h-20 my-16'/>
                    <div className='uppercase'>
                        {accordionData.map(({title, content}) => {
                            return(<Accordian title={title} content={content}/>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    )
}