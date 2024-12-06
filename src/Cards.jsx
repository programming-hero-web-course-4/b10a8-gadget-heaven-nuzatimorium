import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";


const Cards = () => {
    const { category } = useParams()
    const data = useLoaderData()
    const [products, setProducts] = useState([])


    useEffect(() => {
        if (category === "All Products") {
            setProducts(data);
        }
        else if (category === undefined) {
            setProducts(data.slice(0, 7));
        }
        else {
            const filteredByCategory = data.filter(product => product.category === category);
            setProducts(filteredByCategory);
        }
    }, [category, data]);


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {
                products.map((product, index) => <Product key={index} product={product}></Product>)
            }
        </div>
    );
};

export default Cards;