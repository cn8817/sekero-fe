import Ranch from '../../assets/99-ranch-market.png'
import Galleria from '../../assets/galleria-logo.png'
import Hmart from '../../assets/h-mart-logo.png'
import Hannam from '../../assets/hannam-chain-logo.png'
import Walmart from '../../assets/walmart-logo.png'
import Zion from '../../assets/zion-market-logo-400.png'

export default function Stores(){
    return(
        <div className="flex flex-col items-center mb-10 h-[80vh]">
            <p className='text-highlight pt-24 pb-3 uppercase small'>sold in stores across the U.S.</p>
            <h2 className='pb-10'>Available in Asian Markets</h2>
            <div className='items-center grid grid-cols-3 grid-rows-2 gap-10'>
                <img src={Hmart} className='max-h-10 m-auto'/>
                <img src={Walmart} className='max-h-20 m-auto'/>
                <img src={Hannam} className='max-h-24 m-auto'/>
                <img src={Ranch} className='max-h-20 m-auto'/>
                <img src={Zion} className='max-h-20 m-auto'/>
                <img src={Galleria} className='max-h-28 m-auto'/>
            </div>
        </div>
    )
}