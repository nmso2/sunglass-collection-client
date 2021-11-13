import { useEffect, useState } from "react";


const useProduct = (id) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://sunglass-collection.herokuapp.com/sunglass/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        // eslint-disable-next-line
    }, []);

    return [product, setProduct]
};

export default useProduct;