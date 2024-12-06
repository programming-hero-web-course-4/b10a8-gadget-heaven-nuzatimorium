import toast from "react-hot-toast";

// Get all items from local storage (for cart)
const getCartFromLocal = () => {
    const allItems = localStorage.getItem("cart");
    if (allItems) {
        return JSON.parse(allItems);
    } else {
        return [];
    }
};

// Add item to cart in local storage
const addToCart = (product) => {
    const cart = getCartFromLocal();
    const isExist = cart.find(item => item.product_id === product.product_id);
    if (isExist) return toast.error('Product is already in the cart!');
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success('Successfully Added to the Cart!');
};

// Remove item from cart in local storage
const removeFromCart = (productId) => {
    const cart = getCartFromLocal();
    const updatedCart = cart.filter(product => product.product_id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success('Successfully Removed from the Cart!');
};

export { addToCart, getCartFromLocal, removeFromCart };
