
export type Product = {
    name: string,
    SKU: number | string,
    desc?: string,
    _id: string | number,
    price: number,
    images?: Array<string>
}

export type CartItem = Partial<Product> & {quantity: number}

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

interface ICartState  {
    items: Array<Partial<Product> & {quantity: number}>
    errorMessage?: string,
    isLoading: boolean
}


export interface IRootState {
    Login: ILoginState,
    Signup: ISignupState,
    Products: IProducts,
    ProductProfile: IProductProfile,
    Cart: ICartState
}


