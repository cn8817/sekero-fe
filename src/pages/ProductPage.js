import Product from "../components/shop/Product";
import PreviewRecipies from "../components/PreviewRecipes";
import Ingredients from "../components/Ingredients";
import News from "../components/News";

export default function ProductPage(){
    return(
        <div>
            <Product/>
            <PreviewRecipies/>
            <Ingredients/>
            <News/>
        </div>
    )
}