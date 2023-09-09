import preview from '../../../assets/preview.svg'
import {FunctionComponent} from "react";

type PhotoPreviewProps = {
    images?: Array<string>
}

const PhotoPreview : FunctionComponent<PhotoPreviewProps> = ({images}) => {
    return <div className={'flex flex-row basis-3/5'}>
        <div className={'basis-1/5 flex flex-col justify-around'}>
            {images && images.slice(1).map(img => {
              return <div className={'w-18'}><img src={img} alt="product-img" className={'object-contain'}/></div>
            })}
        </div>
        <div className={'flex-grow-1'}>
            <img src={images ? images[0] : preview} alt="product-img" className={'object-contain w-full h-full px-10'}/>
        </div>
    </div>
}

export default PhotoPreview;