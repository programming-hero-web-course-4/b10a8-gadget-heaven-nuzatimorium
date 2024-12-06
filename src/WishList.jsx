import { useEffect, useState } from "react";

import { BsCart4 } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { getAllFromLocal, removeFromLocal } from "./wishlist";


const WishList = () => {
    const [products, setProducts] = useState([])
    const handleRemove = (productId) => {
        removeFromLocal(productId);
        const updatedProducts = products.filter((product) => product.product_id !== productId); // Filter out the removed product
        setProducts(updatedProducts);
    };
    useEffect(() => {
        const fav = getAllFromLocal()
        setProducts(fav)
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold pb-8">WishList</h2>
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.product_id} className="bg-base-100 p-8 rounded-2xl flex gap-8">
                        <img
                            src={product.product_image}
                            alt={product.product_title}
                            className="h-48  w-72 object-cover rounded-xl mb-2"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold pb-4">{product.product_title}</h2>
                            <p className="text-lg text-[#09080F99] font-normal"><span className="text-lg text-black font-semibold">Description:</span> {product.description}</p>
                            <p className="text-xl font-semibold">Price: ${product.price}</p>
                            <button
                            className="btn text-lg font-bold rounded-full px-6 mb-4 bg-[#9538E2] text-white">Add To Cart <BsCart4 />
                        </button>
                        </div>
                            <p onClick={() => handleRemove(product.product_id)} className="text-red-600 cursor-pointer text-4xl"><GiCrossMark /></p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-5xl font-bold flex items-center justify-center">Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default WishList;