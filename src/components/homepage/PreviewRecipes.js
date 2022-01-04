import { Link } from 'react-router-dom'
import Button from '../Button'
import Tteokbokki from '../../assets/recipe-photo.png'
import Tteokguk from '../../assets/recipe-photo-2.png'

export default function PreviewRecipies(){

const dummyData = [
    {
        id: 1,
        title: 'Tteokbokki',
        alt: '(Spicy stir-fried Rice Caked)',
        description: 'This popular street-food dish is a garlicky, richly spiced dish with cylindrical rice cakes bathed in red chili paste.',
        picture: Tteokbokki,
        servings: '2',
        time: '20'
    },
    {
        id: 1,
        title: 'Tteokbokki',
        alt: '(Spicy stir-fried Rice Caked)',
        description: 'A traditional must-have holiday dish. Using rice cake coins, we share a recipe that warms the heart.',
        picture: Tteokguk,
        servings: '2',
        time: '20'
    },
]
    return(
        <div className="flex flex-col items-center mb-10 bg-base2 h-[100vh]">
             <p className='text-highlight pt-24 pb-3 uppercase small'>our secret korean recipes</p>
            <h2 className='pb-10'>Recipes</h2>
        <div className='container flex flex-row justify-between mb-10'>
        {dummyData.map(item => {
            return(
                    <div className='flex flex-row bg-base1 rounded-2xl overflow-hidden max-h-[18rem] max-w-[35rem]'>
                        <div>
                            <img src={item.picture}/>
                        </div>
                        <div className='flex flex-col justify-between h-40'>
                            <div className='py-4 px-8'>
                                <div className='font-bold pb-4'>
                                    <p>{item.title}</p>
                                    <p>{item.alt}</p>
                                </div>
                                <p className='small pb-4'>{item.description}</p>
                                <p className='small pb-4'>{item.servings} servings & {item.time} min total.</p>
                                <Button variant='secondary'>See Recipe</Button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    <Link to='/shop'><Button className='py-3 my-8 uppercase'>view all recipes</Button></Link>
</div>
    )
}