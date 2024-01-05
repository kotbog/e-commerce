import CartList from "../features/cart/components/CartList";
import CartTotal from "../features/cart/components/CartTotal";
import {useDispatch, useSelector} from "react-redux";
import {CartItem, IRootState} from "../data/types";
import {useEffect} from "react";
import {getCartItems} from "../features/cart/context/CartActions";
import Preloader from "../components/Preloader";
const Cart = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(!localStorage.getItem('cart-items')) dispatch(getCartItems("64eef259db191b86e899d210"))
    }, [dispatch]);
    const items =
        useSelector<IRootState,Array<CartItem>>
        ((state) => state.Cart.items);

    if(!items && items[0]) return <Preloader/>


    return <div className={'container m-auto'}>
        <CartList items={items}/>
        <CartTotal shipping={10} subtotal={120} final={false}/>
    </div>
}

export default Cart;