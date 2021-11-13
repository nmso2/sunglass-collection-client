import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, review, product, rating } = props.review;
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-md lg:min-h-full hover:shadow-2xl duration-500">
                <header className="leading-tight p-2 md:p-4">
                    <h1 className="text-3xl">{product}</h1>
                </header>

                <body className="flex justify-evenly items-center my-2">
                    <p className="text">By: {name}</p>
                    <p><span className="text">Rating: </span> <Rating className="text-yellow-500"
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                    /></p>
                </body>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="ml-2 text-lg">{review}</p>
                </footer>

            </article>
        </div>
    );
};

export default Review;