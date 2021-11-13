import { useEffect, useState } from "react";


const useOrder = (id) => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://sunglass-collection.herokuapp.com/purchaseSunglass/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    return [order, setOrder]
};

export default useOrder;