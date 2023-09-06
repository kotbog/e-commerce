import {useState} from "react";

const CartItem = ({img, price}) => {

    const [quantity, setQuantity] = useState(1);

    return <li className={'flex justify-between my-5 py-5 px-10 shadow-md rounded font-semibold text-sm w-full items-center'}>
        <span className={'basis-1/12 text-center relative'}>
            <button className={'absolute right-0 -top-2 bg-red-500 rounded-full'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img src={img} alt="product" className={'w-full'}/>
        </span>
        <span className={'basis-1/12 text-center'}>${price}</span>
        <span className={'basis-1/12 text-center'}>{quantity}</span>
        <span className={'basis-1/12 text-center'}>${price * quantity}</span>
    </li>
}

export default CartItem;