import Rating from "./Rating";
import Prod from '../assets/img_1.png'
import {useState} from "react";
import {NavLink} from "react-router-dom";



const Product = () => {

    const [animateBtn, setAnimateBtn] = useState(false);


    return <div className={'w-64'}>
        <div className={'relative pb-10'}
             onMouseOver={() => {setAnimateBtn(true)}}
             onMouseOut={() => {setAnimateBtn(false)}}
        >
            <div className={'bg-gray-200 absolute transition duration-250 rounded-full p-1 right-0 hover:scale-125'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
            <div className={'bg-gray-200 absolute transition duration-250 top-10 rounded-full p-1 right-0 hover:scale-125'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <NavLink to={''}>
                <img src={Prod} alt="product" className={'w-full h-full object-contain'}/>
            </NavLink>
            <button className={`font-bold transition duration-300 transform bg-black text-white w-full py-2 absolute bottom-0${animateBtn ? ' opacity-1 translate-y-0' : ' opacity-0 translate-y-5'}`}>Add to cart</button>
        </div>
        <h4 className={'font-bold pt-4'}>Quilted Satin Jacket</h4>
        <div className={'flex justify-start content-center'}>
            <h4 className={'text-red-500'}>$400</h4>
            <Rating score={4} ratingQuantity={3}/>
        </div>

    </div>
}


export default Product;