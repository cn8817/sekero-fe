import MainPic from '../../assets/pexels-polina-tankilevitch-4110256.png'

export default function Hero(){
    return(
        <div className='container flex flex-row justify-between items-center py-16'>
        <div>
            <h1 className='pb-8'>Recipes.</h1>
            <div className='max-w-lg'>
                <p className='pb-8'>yum</p>
                <p></p>
            </div>
        </div>
            <img src={MainPic} className=' max-h-[600px] object-contain'/>
        </div>
    )
}