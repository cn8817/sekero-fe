import gluten from '../assets/noun-gluten-free.png'
import msg from '../assets/noun-no-msg.png'
import rice from '../assets/noun-rice.png'

export default function Ingredients(){
    return(
        <div className="container flex flex-row justify-around my-24">
            <div className='bg-base2 w-60 flex flex-col justify-center p-6'>
                <img src={gluten} alt='gluten free' className='max-h-32 object-contain pb-5'/>
                <p className='font-bold'>Gluten Free</p>
                <p className='small'>Healthy and a great alternative to a gluten-free diet!</p>
            </div>
            <div className='bg-base2 w-60 flex flex-col justify-center p-6'>
                <img src={rice} alt='rice' className='max-h-32 object-contain pb-5'/>
                <p className='font-bold'>Vegan</p>
                <p className='small'>Our products are made with just 3 ingredients: rice, salt, and water</p>
            </div>
            <div className='bg-base2 w-60 flex flex-col justify-center p-6'>
                <img src={msg} alt='no msg' className='max-h-32 object-contain pb-5'/>
                <p className='font-bold'>No MSG</p>
                <p className='small'>No preservatives to keep its optimal freshness, so please refrigerate!</p>
            </div>
        </div>
    )
}