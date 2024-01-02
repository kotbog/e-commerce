import instance from "../../../lib/axios";


export const getCartItems = async (id: string) => {
    const response = await instance.get('/cart/items', {params: {id}});
    console.log(response)
    return await response.data.resItems;
}