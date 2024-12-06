import { BsCart4 } from "react-icons/bs";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { addFav } from "./wishlist";
import { addToCart } from "./cart";



const CardDetails = () => {
    const product = useLoaderData();

    const { product_title, product_image, price, Specification, description, rating, availability } = product;

    const handelAddFav = (product) => {
        addFav(product)
    }

    const handleAddToCart = () => {
        addToCart(product); // Add the product to the cart when clicked
    };
    return (
        <div className="mb-[340px]">
            <div className="absolute w-full bg-[#9538E2] text-white text-center">
                <h2 className="pt-8 text-4xl font-bold">Product Details</h2>
                <p className="w-[55%] mx-auto mt-4 pb-60 text-base font-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="relative card card-side bg-base-100 shadow-xl w-[75%] mx-auto rounded-3xl items-center top-[170px]">
                <figure className="p-6 h-[500px]">
                    <img
                        className="h-full rounded-2xl"
                        src={product_image}
                        alt="Product" />
                </figure>
                <div className="card-body pl-4">
                    <h2 className="card-title text-3xl font-semibold">{product_title}</h2>
                    <p className="text-xl font-semibold text-[#09080FCC]">Price: {price}</p>
                    <p className="text-sm font-medium">
                        {availability ? (
                            <span className="text-green-600 border-green-600 w-[100px] px-4 py-1 border rounded-full bg-[#309C081A]">In Stock</span>
                        ) : (
                            <span className="text-red-600 border-red-600 w-[200px] bg-red-600/15 border rounded-full px-4 py-1">Out of Stock</span>
                        )}
                    </p>
                    <p className="text-lg text-[#09080F99]">{description}</p>
                    <h2 className="text-lg font-bold">Specifications:</h2>
                    <ul className="list-disc text-lg text-[#09080F99]">
                        {Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <p className="font-bold text-lg">Rating: </p>
                    <div className="flex items-center gap-2">
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<FaRegStar color="gray" />}
                            fullSymbol={<FaStar color="#FFD700" />}
                        />
                        <span className="text-sm bg-[#09080f33] rounded-full px-2">{rating}</span>
                    </div>
                    <div className="card-actions items-center">
                        <button
                            onClick={handleAddToCart}
                            className={`btn text-lg font-bold rounded-full px-6 ${availability ? 'bg-[#9538E2] text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                }`} disabled={!availability}>Add To Cart <BsCart4 />
                        </button>
                        <button onClick={() => handelAddFav(product)} className="bg-white p-3 text-lg rounded-full border text-black"><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
