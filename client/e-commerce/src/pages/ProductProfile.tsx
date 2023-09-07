import ConfigProduct from "../features/products/components/ConfigProduct";
import PhotoPreview from "../features/products/components/PhotoPreview";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductByIdAction} from "../features/products/context/ProductsActions";
import preloader from '../assets/preloader.svg'
import Preloader from "../components/Preloader";

const ProductProfile = () => {
    let {id} = useParams();

    const dispatch = useDispatch();


    const product = useSelector(state => state.ProductProfile.product);

    const isLoading = useSelector(state => state.ProductProfile.isLoading)

    useEffect(() => {
        dispatch(getProductByIdAction(id));
    }, [dispatch, id]);


    return <div className={'container m-auto'}>
        {!isLoading ?
            <div className={'flex'}>
                <PhotoPreview images={product.images}/>
                <ConfigProduct name={product.name} desc={product.desc} price={product.price}/>
            </div>
            :
            <Preloader/>
        }

    </div>
}

export default ProductProfile;