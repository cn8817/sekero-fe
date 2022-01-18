import Recipes from "../components/recipes/Recipes";
import PreviewProducts from "../components/PreviewProducts";
import Ingredients from "../components/Ingredients";
import News from "../components/News";
import Hero from "../components/recipes/Hero";

export default function RecipesPage(){
    return(
        <div>
            <Hero/>
            <Recipes/>
            <PreviewProducts/>
            <Ingredients/>
            <News/>
        </div>
    )
}