import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { name, img, details, _id, price, rating } = props.products;
    console.log(rating)
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-md lg:min-h-full hover:shadow-2xl duration-500">

                <img alt="Placeholder" className="block h-auto w-full" src={img} />


                <header className="leading-tight p-2 md:p-4">
                    <h1 className="text-3xl">{name}</h1>
                </header>

                <body className="flex justify-evenly items-center my-2">
                    <p className="text-2xl">Price: {price} &#2547;</p>
                    <p><span className="text-2xl">Rating: </span> <Rating className="text-yellow-500"
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                    /></p>
                </body>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="ml-2 text-lg">{details}</p>
                </footer>


                <Link to={`/sunglass/${_id}`}><button type="button" className="mb-10 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg">Buy Now</button>
                </Link>

            </article>
        </div>
    );
};

export default Products;