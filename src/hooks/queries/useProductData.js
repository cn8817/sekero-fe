import { useQuery } from "react-query";
import axios from 'axios'

const fetchProduct = (id) => {
    return axios.get(`https://43p44fmhh5.execute-api.us-west-1.amazonaws.com/dev/products/${id}`)
}

export const useProductData = (id) => {
    return useQuery(['product', id], () => fetchProduct(id))
}