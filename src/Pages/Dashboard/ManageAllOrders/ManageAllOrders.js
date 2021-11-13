import useCancelOrders from '../../../hooks/useCancelOrders';
import ManageOrder from './ManageOrder/ManageOrder';

const ManageAllOrders = () => {

    const [orders, handleCancelOrders] = useCancelOrders();
    console.log(orders)
    return (
        <div className="bg-gray-100 pb-10 min-h-screen">
            <div className="shadow-2xl bg-white p-5 mt-10 mx-2 lg:inline-block">
                <h1 className="text-5xl px-2 lg:px-auto pb-5">Manage Order</h1>
                <hr />
                {orders.map(order => <ManageOrder key={order._id} order={order} handleCancelOrders={handleCancelOrders}></ManageOrder>)}
            </div>
        </div>
    );
};

export default ManageAllOrders;