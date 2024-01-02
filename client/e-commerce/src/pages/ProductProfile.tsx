import ConfigProduct from "../features/products/components/ConfigProduct";
import PhotoPreview from "../features/products/components/PhotoPreview";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductByIdAction} from "../features/products/context/ProductsActions";
import Preloader from "../components/Preloader";
import {IRootState} from "../data/types";
import {Product} from "../data/types";

const ProductProfile = () => {
    let {id} = useParams();

    const dispatch = useDispatch();


    const product = useSelector<IRootState, Product | undefined>(state => state.ProductProfile.product);

    const isLoading = useSelector<IRootState, boolean>(state => state.ProductProfile.isLoading)

    useEffect(() => {
        if (id) dispatch(getProductByIdAction(id));
    }, [dispatch, id]);

    if(isLoading) return <Preloader/>

    return <div className={'container m-auto'}>
        {product ?
            <div className={'flex'}>
                <PhotoPreview images={product.images}/>
                <ConfigProduct name={product.name} desc={product.desc} price={product.price} colors={['green', 'red']}/>
            </div>
            : <p>Product not found</p>

        }

    </div>
}

export default ProductProfile;