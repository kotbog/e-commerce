import Product from "../features/products/components/Product";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsAction} from "../features/products/context/ProductsActions";
import {IRootState} from "../data/types";
import {Product as ProductType} from "../data/types"
import Sidebar from "../features/category/components/Sidebar";
import Tab from "../components/Tab";
import {state} from "sucrase/dist/types/parser/traverser/base";

const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector<IRootState, Array<ProductType> | undefined>((state) => state.Products.products);
    //const error = useSelector<IRootState, string | undefined>(state => state.Products.errorMessage);
    console.log(products)

    useEffect(() => {
        dispatch(getProductsAction({}));
    }, [dispatch]);
    return <div className={'container mx-auto'}>
        <div className={'flex'}>
            <Sidebar />
            <div className={'flex justify-around flex-wrap gap-10'}>
                {
                    products && products.map(product => <Product key={product._id} SKU={product.SKU}  name={product.name} price={product.price} img={product.images && product.images[0]} id={product._id}/>)
                }
            </div>
        </div>
        {products ? <Tab header={'Наші продукти'} products={products}/> : null}

    </div>
}
export default Home;