import Rating from "./Rating";
import Button from "../../../components/Button";
import {FunctionComponent, useState} from "react";


type ConfigProductProps = {
    name: string,
    desc?: string | "",
    price: number
};

const ConfigProduct : FunctionComponent<ConfigProductProps> = ({name, desc, price}) => {

    const [amount, setAmount] = useState(1);

    return <div className={'flex flex-col basis-2/5 py-10'}>
        <h3 className={'font-bold text-2xl'}>{name}</h3>
        <div className={'flex items-center py-2 justify-start'}>
            <Rating score={4} ratingQuantity={15}/>
            <span className={'block h-7 w-0.5 bg-gray-400 mx-4'}></span>
            <span className={"text-green-500"}>In Stock</span>
        </div>
        <div>
            <span className={'text-3xl'}>${price}</span>
        </div>
        <div>
            <p className={'text-justify my-8'}>{desc}</p>
        </div>
        <span className={'block h-0.5 w-full bg-gray-300'}></span>
        <div>
            <h2 className={'text-xl'}>Colors: </h2>
        </div>
        <div className={'flex items-center'}>
            <h2 className={'text-xl'}>Size:</h2>
            <Button value={'XS'} styles={'focus:bg-red-500 focus:text-white bg-white border-2 border-gray-500 text-black text-xs font-bold w-8 h-8 m-2'}/>
        </div>
        <div className={'flex flex-col w-32'}>
            <div className={'flex flex-row border-2 items-center justify-start'}>
                <button
                    onClick={() => {if(amount > 1) setAmount(amount - 1)}}
                    className={'border-r-2 text-3xl basis-1/4'}
                >-</button>
                <input type="text" className={'basis-1/2 outline-0 text-center box-border w-full'} value={amount} />
                <button
                    onClick={() => {setAmount(amount + 1)}}
                    className={'border-l-2 text-3xl bg-red-500 text-white basis-1/4'}
                >+</button>
            </div>
            <Button value={'Buy Now'} styles={'bg-red-500 text-white'}/>
        </div>
    </div>
}

export default ConfigProduct;