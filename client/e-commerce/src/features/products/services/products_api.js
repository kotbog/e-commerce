import instance from "../../../lib/axios";

export const getProducts = async (params) => {
    const response = await instance.get('/product', params);
    return response.data.products;
}