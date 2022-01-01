import React from 'react'
import { Link } from 'react-router-dom'

export default function PreviewProducts(){
    const dummyData = [
        {
            picture: 'picture',
            stars: '5 stars',
            product: 'Tteokguk Rice Cakes',
            alt: '(Rice Cake Soup)',
            price: '$9.99',
            weight: '24 oz pack (Pack of 1)'
        },
        {
            picture: 'picture',
            stars: '5 stars',
            product: 'Tteokbokki Rice Cakes',
            alt: '(Spicy Stir-Fried Rice Cakes)',
            price: '$9.99',
            weight: '24 oz pack (Pack of 1)'
        },
        {
            picture: 'picture',
            stars: '5 stars',
            product: 'Macaroni Rice Cakes',
            price: '$9.99',
            weight: '24 oz pack (Pack of 1)'
        },
    ]
    return(
        <div className='preview-products-container'>
            <div className='preview-heading'>
                <p>OUR ONLINE STORE</p>
                <h1>Sekero Rice Cakes</h1>
            </div>
            <div className='preview-item-container'>
                {dummyData.map(item => {
                    return(
                        <div className='preview-item'>
                            <div className='preview-img-container'>
                                <p>{item.picture}</p>
                            </div>
                            <div className='preview-info-container'>
                                <div className='first-info'>
                                    <p>{item.stars}</p>
                                    <p>{item.product}</p>
                                    <p>{item.alt}</p>
                                </div>
                                <div className='second-info'>
                                    <p>{item.price}</p>
                                    <p>{item.weight}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link to='/shop'><button className='preview-btn'>VIEW ALL PRODUCTS</button></Link>
        </div>
    )
}