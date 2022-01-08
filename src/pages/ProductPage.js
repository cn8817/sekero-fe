import { useEffect } from 'react'
import Product from "../components/shop/Product";
import PreviewRecipies from "../components/PreviewRecipes";
import Ingredients from "../components/Ingredients";
import News from "../components/News";

export default function ProductPage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div>
            <Product/>
            <PreviewRecipies/>
            <Ingredients/>
            <News/>
        </div>
    )
}