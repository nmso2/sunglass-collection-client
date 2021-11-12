import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useCancelOrder from '../../../hooks/useCancelOrder';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, handleCancelOrder] = useCancelOrder();

    console.log(orders)

    return (
        <div className="bg-gray-100 pt-1 min-h-screen">
            <div className="shadow-2xl bg-white p-5 mt-10 mx-2 lg:inline-block">
                <h1 className="text-5xl px-2 lg:px-auto pb-5">My Orders</h1>
                <hr />
                {orders.map(order => <MyOrder key={order._id} handleCancelOrder={handleCancelOrder} order={order}></MyOrder>)}
            </div>
        </div>
    );
};

export default MyOrders;