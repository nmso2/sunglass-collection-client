import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useCancelOrder = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/purchaseSunglass?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);
    // Delete a Plan
    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?')
        if (proceed) {
            const url = `http://localhost:5000/purchaseSunglass/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Canceled the Plan!');
                        const remainingOrders = orders.filter(purchaseOrder => purchaseOrder._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }
    return [orders, handleCancelOrder];
};

export default useCancelOrder;


