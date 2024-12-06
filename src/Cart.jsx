import { useEffect, useState } from "react";
import Modal from "react-modal";
import {GiCrossbow, GiSettingsKnobs } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { getCartFromLocal, removeFromCart } from "./cart";
Modal.setAppElement("#root");



const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
        const updatedCart = cartItems.filter((item) => item.product_id !== productId);
        setCartItems(updatedCart);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        localStorage.removeItem("cart");
        setCartItems([]);
        setShowModal(false);
        navigate("/");
    };

    const handleSortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setCartItems(sortedItems);
      };

    useEffect(() => {
        const cart = getCartFromLocal();
        setCartItems(cart);
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center">
                <h4 className="text-2xl font-bold">Cart</h4>
                <div className="flex items-center gap-5">
                    <p className="text-2xl font-bold">Total cost: ${calculateTotalCost()}</p>
                    <button className="flex h-11 w-[165px] items-center justify-center rounded-full bg-gradient-to-b from-indigo-500 to-pink-500 p-[1.5px] text-[#9538E2] hover:shadow-xl hover:shadow-purple-600/20">
                            <div onClick={handleSortByPrice} className="flex gap-2 h-full w-full items-center justify-center rounded-full text-lg font-semibold bg-white">
                            Sort by Price<GiSettingsKnobs />
                            </div>
                        </button>
                    <button onClick={handlePurchase} className="bg-gradient-to-t from-fuchsia-600 to-purple-600 text-white text-lg font-medium py-3 px-7 rounded-full">Purchase</button>
                </div>
            </div>
            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
            >
                <img className="w-20 mx-auto" src="https://i.ibb.co.com/GJPJSp9/Group.png" alt="" />
                <h3 className="text-2xl font-bold mb-3 mt-6">Payment Successfully</h3>
                <hr />
                <p className="text-[#09080F99] font-medium my-3">Thanks for purchasing.</p>
                <p className="text-[#09080F99] font-medium mb-4">Total: ${calculateTotalCost()}</p>
                <button
                    onClick={handleCloseModal}
                    className="bg-[#11000023] text-black w-full py-2 rounded-full"
                >
                    Close
                </button>
            </Modal>
            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-5xl font-bold flex items-center justify-center">Your wishlist is empty.</p>
            ) : (
                <div className="mt-5 space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.product_id} className="bg-base-100 p-8 rounded-2xl flex gap-8">
                        <img
                            src={item.product_image}
                            alt={item.product_title}
                            className="h-48  w-72 object-cover rounded-xl mb-2"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold pb-5">{item.product_title}</h2>
                            <p className="text-lg text-[#09080F99] font-normal"><span className="text-lg text-black font-semibold">Description:</span> {item.description}</p>
                            <p className="text-xl font-semibold pt-4">Price: ${item.price}</p>
                        </div>
                            <p
                                onClick={() => handleRemove(item.product_id)}
                                className="text-red-600 cursor-pointer text-4xl"><GiCrossbow /></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;