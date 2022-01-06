import MainPic from '../../assets/pexels-polina-tankilevitch-4110256.png'

export default function Hero(){
    return(
    <div className='container flex flex-row justify-between items-center py-16'>
            <div>
                <h1>Sekero One.</h1>
                <h1 className='pb-8'>One Family.</h1>
                <div className='max-w-lg'>
                    <p className='pb-8'>In korean, "Sekero" means "around the world." From manufacturing rice cakes in the heart of Los ANgeles to distributing products from a South Korean manufactuer in Seoul, Sekero One is run by first-gen Korean couple James and Sunhee Choi.</p>
                    <p>Since 1994, Mr. and Mrs. Choi started a new life together in Souther California, sharing their love for Korean food. +25 years and many tests later, the couple discovered the most chewy, perfect rice cakes.</p>
                </div>
            </div>
                <img src={MainPic} className=' max-h-[600px] object-contain'/>
        </div>
    )
}