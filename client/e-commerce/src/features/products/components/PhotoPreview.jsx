import Speaker1 from '../assets/speaker1.png'
import Speaker2 from '../assets/speaker2.png'
const PhotoPreview = () => {
    return <div className={'flex flex-row basis-3/5'}>
        <div className={'basis-1/5 flex flex-col justify-around'}>
            {[...Array(5)].map(item => {
              return  <div className={'w-18'}><img src={Speaker2} alt="product-img" className={'object-contain'}/></div>
            })}
        </div>
        <div className={'flex-grow-1'}>
            <img src={Speaker1} alt="product-img" className={'object-contain w-full h-full'}/>
        </div>
    </div>
}

export default PhotoPreview;