import {useSelector} from "react-redux";
import {IRootState, User} from "../data/types";
import CheckoutForm from "../features/cart/components/CheckoutForm";
import CartTotal from "../features/cart/components/CartTotal";
import Button from "../components/Button";

const Checkout = () => {
    const user = useSelector<IRootState, User | undefined>(state => state.Login.user);

    return <div className={'min-h-screen container m-auto flex flex-wrap'}>
        {!user ? <CheckoutForm/> :
            <div className={'basis-1/2'}>
                <span><h2 className={'font-semibold'}>First name: </h2>{user.first_name}</span>
                <span><h2 className={'font-semibold'}>Last name: </h2>{user.last_name}</span>
                <span><h2 className={'font-semibold'}>E-mail: </h2>{user.email}</span>
                <span><h2 className={'font-semibold'}>Phone number: </h2>{user.telephone}</span>
                <span><h2 className={'font-semibold'}>Address: </h2>{user.address}</span>
                <Button value={'Confirm'} styles={'bg-red-600 text-white'}/>
            </div>
        }
        <div className={'basis-1/2 flex-grow'}>
            <CartTotal subtotal={140} shipping={10} final={true}/>
        </div>
    </div>
}

export default Checkout;