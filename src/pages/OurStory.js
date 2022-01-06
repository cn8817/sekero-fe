import Hero from '../components/ourStory/Hero'
import PreviewProducts from '../components/PreviewProducts'
import PreviewRecipies from '../components/PreviewRecipes'
import Ingredients from '../components/Ingredients'
import News from '../components/News'

export default function OurStory() {
    return(
        <div>
            <Hero/>
            <PreviewProducts/>
            <PreviewRecipies/>
            <Ingredients/>
            <News/>
        </div>
    )
}