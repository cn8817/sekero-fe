import Hero from "../components/shop/Hero"
import ProductList from "../components/shop/ProductList"
import PreviewRecipies from "../components/PreviewRecipes"
import Ingredients from "../components/Ingredients"
import News from "../components/News"

export default function Shop(){
    return(
        <>
            <Hero/>
            <ProductList/>
            <PreviewRecipies/>
            <Ingredients/>
            <News/>
        </>
    )
}