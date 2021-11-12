import React from 'react';
import useProducts from '../../hooks/useProducts';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Products from '../Shared/Products/Products';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <Header></Header>
            <div className="container mb-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        products.map(products => <Products key={products._id} products={products}></Products>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;