import Product from "../features/products/components/Product";

const Home = () => {
    return <div className={'container mx-auto'}>
        <div className={'flex justify-around flex-wrap gap-10'}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
}
export default Home;