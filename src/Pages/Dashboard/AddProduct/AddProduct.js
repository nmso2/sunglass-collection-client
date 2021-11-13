import React from 'react';
import { useForm } from 'react-hook-form';
const AddProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://sunglass-collection.herokuapp.com/sunglass', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Added Successfully!');
                    reset();
                }
            })
    }
    return (
        <div className="leading-loose">
            <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-gray-800 font-medium">Add Product</p>

                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="address">Product Name</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("name", { required: true })} placeholder="Plan Name" />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="address">Image Url</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("img", { required: true })} placeholder="Url" />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="address">Details</label>
                    <textarea className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("details", { required: true })} placeholder="Details" />
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" {...register("price", { required: true })} placeholder="Price" />
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" step=".01" {...register("rating", { required: true })} placeholder="Rating" />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="mt-4">
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;