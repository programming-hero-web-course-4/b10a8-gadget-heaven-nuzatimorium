/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { product_title, product_image, price, product_id } = product || {};
    return (
        <div className="card bg-base-100 m-3">
            <figure className="px-10 pt-10 h-[380px] w-[335px]">
                <img
                    src={product_image}
                    alt="Tech"
                    className="rounded-xl h-full w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{product_title}</h2>
                <p className="text-[#09080F99] text-xl font-medium">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/cards/${product_id}`}>
                        <button className="flex h-11 w-[136px] items-center justify-center rounded-full bg-gradient-to-t from-fuchsia-600 to-purple-600 p-[1.5px] text-[#9538E2] hover:shadow-xl hover:shadow-purple-600/20">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                View Details
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;