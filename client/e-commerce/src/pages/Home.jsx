import Product from "../features/products/components/Product";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsAction} from "../features/products/context/ProductsActions";


const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.Products.products);

    const error = useSelector(state => state.Products.errorMessage);

    useEffect(() => {
        dispatch(getProductsAction());
    }, [dispatch]);
    return <div className={'container mx-auto'}>
        <div className={'flex justify-around flex-wrap gap-10'}>
            {
               products.map(product => <Product name={product.name} price={product.price} img={product.images[0]} id={product._id}/>)
            }
        </div>
    </div>
}
export default Home;