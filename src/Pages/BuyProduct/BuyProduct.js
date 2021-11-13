import React from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useProduct from '../../hooks/useProduct';

const BuyProduct = () => {
    const { ID } = useParams();
    const [product] = useProduct(ID);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {
        data.sunglass_id = ID;
        data.confirmed = false;
        fetch('https://sunglass-collection.herokuapp.com/purchaseSunglass', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully!');
                    reset();
                    history.push(redirect_uri);
                }
            })
    }

    return (
        <div className="bg-gray-100 pt-1 lg:flex items-center">
            <div className="shadow-2xl bg-white m-12 p-8 lg:inline-block">
                <div>
                    <img className="mx-auto" src={product?.img} alt="" />
                    <p className="text-3xl p-5">{product?.name}</p>
                    <p>Rating: <Rating className="text-yellow-500"
                        initialRating={product?.rating}
                        readonly
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                    /></p>
                    <p className="text-3xl">Price: {product?.price} &#2547;</p>

                    <p className="max-w-2xl text-lg">{product?.details}</p>
                </div>

            </div>
            <div className="leading-loose">
                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-gray-800 font-medium">Customer information</p>
                    <div className="">
                        <label className="block text-sm text-gray-00" htmlFor="name">Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="email">Email</label>
                        <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="address">Address</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="address" {...register("street", { required: true })} placeholder="Street" />
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="address" {...register("city", { required: true })} placeholder="City" />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="address" {...register("district", { required: true })} placeholder="District" />
                    </div>

                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="phone">Phone</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="tel" {...register("phone", { required: true })} placeholder="Phone" />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="mt-4">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default BuyProduct;