import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import Button from '../Button'
import axios from 'axios'

export default function Recipes() {

    const queryInfo = useQuery('recipes', () =>
        axios
        .get('https://43p44fmhh5.execute-api.us-west-1.amazonaws.com/dev/recipes')
        .then(res => res.data)
    )

    return(
        <div className="flex flex-col items-center pb-14 bg-base2">
             <p className='text-highlight pt-24 pb-3 uppercase small'>our secret korean recipes</p>
            <h2 className='pb-10'>Recipes</h2>
        <div className='container flex flex-row justify-between mb-10 flex-wrap'>
        {queryInfo.data?.map(item => {
            return(
                    <div className='flex flex-row bg-base1 rounded-2xl mt-5 overflow-hidden max-h-[18rem] max-w-[35rem]'>
                        <div>
                            <img src={item.image}/>
                        </div>
                        <div className='flex flex-col justify-between h-40'>
                            <div className='py-4 px-8'>
                                <div className='font-bold pb-4'>
                                    <p>{item.title}</p>
                                    {/* <p>{item.alt}</p> */}
                                </div>
                                <p className='small pb-4'>{item.r_desc}</p>
                                <p className='small pb-4'>{item.servings} servings & {item.minutes} min total.</p>
                                <Button variant='secondary'>See Recipe</Button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
</div>
    )
}