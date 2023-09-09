import Input from "../../../components/Input";
import Button from "../../../components/Button";

type CartTotalProps = {
    subtotal: number, shipping:number
}

const CartTotal = ({subtotal, shipping} : CartTotalProps) => {
    return <div className={'flex w-full justify-between'}>
        <div className={'basis-2/5 flex justify-between items-start'}>
            <Input placeholder={'Coupon Code'} styles={'w-1/2'}/>
            <Button value={'Apply Coupon'} styles={'bg-red-500 text-white w-48'}/>
        </div>
        <div className={'basis-2/5 border-2 rounded p-5 border-black'}>
            <h2 className={'font-bold text-lg'}>Cart total</h2>
            <div className={'flex justify-between border-b-2 border-gray-500 py-3 font-medium'}>
                <p>Subtotal:</p>
                <span>${subtotal}</span>
            </div>
            <div className={'flex justify-between border-b-2 border-gray-500 py-3 font-medium'}>
                <p>Shipping:</p>
                <span>${shipping}</span>
            </div>
            <div className={'flex justify-between border-b-2 border-gray-500 py-3 font-medium'}>
                <p>Total:</p>
                <span>${subtotal + shipping}</span>
            </div>
            <Button styles={'bg-red-500 text-white m-auto'} value={'Process To Checkout'}/>
    </div>
    </div>
}

export default CartTotal;