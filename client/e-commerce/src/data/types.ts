import {Product} from "../features/products/data/types";

export interface ILoginState {
    loading: boolean,
    loggedIn: boolean,
    errorMessage?: string,
    user?: Object
}
export interface ISignupState {
    success: boolean,
    message?: string
}
export interface IProducts {
    products?: Array<Product>,
    errorMessage: '' | string | undefined
}
export interface IProductProfile {
    product?: Product,
    errorMessage?: string,
    isLoading: boolean
}



export interface IRootState {
    Login: ILoginState,
    Signup: ISignupState,
    Products: IProducts,
    ProductProfile: IProductProfile
}