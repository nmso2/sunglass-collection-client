import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { useState } from 'react';
import useProducts from '../../../../hooks/useProducts';

const ManageOrder = (props) => {
    const { handleCancelOrders } = props;
    const [products] = useProducts();
    const [order] = useState(props.order);

    //-------------------------------------
    const handleUpdateOrder = e => {
        order.confirmed = true;
        const url = `https://sunglass-collection.herokuapp.com/purchaseSunglass/${order._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(props.order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully!');
                    window.location.reload();
                }
            })
        e.preventDefault()
    }
    //-------------------------------------

    return (
        <div>
            {products.filter(product => order.sunglass_id === product._id).map(purchasedOrder => <div>
                <div className="lg:flex items-baseline justify-end">
                    <p className="lg:text-3xl lg:px-5">{purchasedOrder.name}</p>
                    <p className="lg:text-lg px-5">{purchasedOrder.price} &#2547;</p>
                    {
                        !order.confirmed && <button className="border hidden border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:block" onClick={handleUpdateOrder}>Confirm Order</button>
                    }
                    <button className="border hidden border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleCancelOrders(order._id)}>Calcel Order</button>
                </div>
                <Accordion allowZeroExpanded className="py-2">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Order Details
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="flex flex-col items-stretch">
                                <p>Name: {order.name}</p>
                                <p>Phone: {order.phone}</p>
                                <p>Address: {order.city}, {order.district}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                {
                    !order.confirmed && <button className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:hidden" onClick={handleUpdateOrder}>Confirm Order</button>
                }
                <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:hidden" onClick={() => handleCancelOrders(order._id)}>Calcel Order</button>
            </div>)}
            <hr />
        </div>
    );
};

export default ManageOrder;