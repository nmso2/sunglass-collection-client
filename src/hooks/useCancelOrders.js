import { useEffect, useState } from "react";


const useCancelOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://sunglass-collection.herokuapp.com/purchaseSunglasses')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    // Delete a Plan
    const handleCancelOrders = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?')
        if (proceed) {
            const url = `https://sunglass-collection.herokuapp.com/purchaseSunglass/${id}`
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
    return [orders, handleCancelOrders];
};

export default useCancelOrders;


