import React from 'react';
import useProducts from '../../../hooks/useProducts';
import useReview from '../../../hooks/useReview';
import Products from '../../Shared/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    const [products] = useProducts();
    const [review] = useReview();
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container mb-12 mx-auto px-4 md:px-12">
                <h1 className="py-8 text-5xl">Products</h1>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        products.slice(0,6).map(products => <Products key={products._id} products={products}></Products>)
                    }
                </div>
            </div>
            <div className="container mb-12 mx-auto px-4 md:px-12">
                <h1 className="py-8 text-5xl">Review</h1>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        review.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;