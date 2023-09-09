import CartItem from "./CartItem";
import Button from "../../../components/Button";
import {FunctionComponent} from "react";

type CartItem = {img:string, price: number, name: string, quantity: number}

type CartListProps = {
    items: Array<CartItem>
}

const CartList : FunctionComponent<CartListProps> = ({items}) => {
    return <div>
        <div className={'flex justify-between my-5 py-5 px-10 shadow-md rounded font-semibold text-sm'}>
            <p className={'basis-1/12 text-center'}>Product</p>
            <p className={'basis-1/12 text-center'}>Price</p>
            <p className={'basis-1/12 text-center'}>Quantity</p>
            <p className={'basis-1/12 text-center'}>Subtotal</p>
        </div>
        <ul className={'flex w-full'}>
            {items ?
                items.map(item => <CartItem price={item.price} img={item.img}/>)
            :   <h2>Cart is empty!</h2>
            }
        </ul>
        <div className={'flex justify-between'}>
            <Button value={'Return To Shop'} styles={'text-black border-2 border-black text-sm font-semibold'}/>
            <Button value={'Update Cart'} styles={'text-black border-2 border-black text-sm font-semibold'}/>
        </div>
    </div>
}

export default CartList;