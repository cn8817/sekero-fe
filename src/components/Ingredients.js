import gluten from '../assets/noun-gluten-free.png'
import msg from '../assets/noun-no-msg.png'
import rice from '../assets/noun-rice.png'

export default function Ingredients(){
    return(
        <div className="container flex flex-row">
            <img src={gluten} alt='gluten free'/>
            <img src={rice} alt='rice'/>
            <img src={msg} alt='no msg'/>
        </div>
    )
}