import instance from "../../../lib/axios";
import {addCartItemResponse} from "../data/types";


export const getCartItems = async (id: string) => {
    const response = await instance.get('/cart/items', {params: {id}});
    console.log(response)
    return response.data.resItems;
}
export const addItemToCart = async (payload: {userId: string, product: {id: string, quantity: string | number}})
    : Promise<addCartItemResponse>=> {
    const response = await instance.post('/cart/items', {data:{userId: payload.userId, product: payload.product}});
    return response.data;
}