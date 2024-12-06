import toast from "react-hot-toast";




const getAllFromLocal = () => {
    const allItems = localStorage.getItem("favorites")
    if (allItems) {
        const fav = JSON.parse(allItems)
        return fav;
    }
    else {
        return [];
    }
}


const addFav = (product) => {
    const favorites = getAllFromLocal();
    const isExist = favorites.find(item => item.product_id === product.product_id);
    if (isExist) return toast.error('Product is Already in the Wishlist!');
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success('Successfully Added to the Wishlist!');
};


const removeFromLocal = (productId) => {
    const currentWishlist = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedWishlist = currentWishlist.filter(product => product.product_id !== productId);
    localStorage.setItem("favorites", JSON.stringify(updatedWishlist));
    toast.success('Successfully Removed from the Wishlist!');
};
export { addFav, getAllFromLocal, removeFromLocal }