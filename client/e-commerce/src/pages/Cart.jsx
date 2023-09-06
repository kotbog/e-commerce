import CartList from "../features/cart/components/CartList";
import product from '../features/products/assets/speaker1.png'
import CartTotal from "../features/cart/components/CartTotal";
const Cart = () => {
    return <div className={'container m-auto'}>
        <CartList items={[{img:product, price: 120, name: "Marshall speaker", quantity: 1}]}/>
        <CartTotal shipping={10} subtotal={120}/>
    </div>
}

export default Cart;