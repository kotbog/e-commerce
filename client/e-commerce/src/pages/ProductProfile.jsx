import ConfigProduct from "../features/products/components/ConfigProduct";
import PhotoPreview from "../features/products/components/PhotoPreview";

const ProductProfile = () => {
    return <div className={'container m-auto'}>
        <div className={'flex'}>
            <PhotoPreview />
            <ConfigProduct />
        </div>
    </div>
}

export default ProductProfile;