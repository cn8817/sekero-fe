import { useQuery } from "react-query";
import axios from 'axios'

const fetchProduct = () => {
    return axios.get(`https://43p44fmhh5.execute-api.us-west-1.amazonaws.com/dev/products/`)
}

export const useProductListData = () => {
    return useQuery('products', () => fetchProduct)
}