import MainPic from '../../assets/pexels-polina-tankilevitch-4110256.png'

export default function Hero(){
    return(
    <div className='container flex flex-row justify-between items-center py-16'>
            <div>
                <h1 className=''>Our products are all</h1>
                <h1 className='text-brand pb-5'>natural <span className='text-black'>&</span> gluten-free</h1>
                <p className='pb-8'>As a family-run business, we care about eating hearty, <br/> healthier ingredients.</p>
            </div>
                <img src={MainPic} className=' max-h-[600px] object-contain'/>
        </div>
    )
}