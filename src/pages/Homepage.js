import Hero from '../components/homepage/Hero'
import PreviewProducts from '../components/PreviewProducts'
import PreviewRecipies from '../components/PreviewRecipes'
import Stores from '../components/homepage/Stores'
import News from '../components/News'

export default function HomePage(){
    return(
        <div>
            <Hero/>
            <PreviewProducts/>
            <PreviewRecipies/>
            <Stores/>
            <News/>
        </div>
    )
}