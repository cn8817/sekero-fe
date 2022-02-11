import { useEffect } from 'react'
import Product from "../components/shop/Product";
import PreviewRecipies from "../components/PreviewRecipes";
import Ingredients from "../components/Ingredients";
import News from "../components/News";
//figure out how to fix the window scroll without actually coding it down?

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