import ConfigProduct from "../features/products/components/ConfigProduct";
import PhotoPreview from "../features/products/components/PhotoPreview";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const ProductProfile = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    return <div className={'container m-auto'}>
        <div className={'flex'}>
            <PhotoPreview />
            <ConfigProduct />
        </div>
    </div>
}

export default ProductProfile;