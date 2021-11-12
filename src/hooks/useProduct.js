import { useEffect, useState } from "react";


const useProduct = (id) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/sunglass/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        // eslint-disable-next-line
    }, []);

    return [product, setProduct]
};

export default useProduct;