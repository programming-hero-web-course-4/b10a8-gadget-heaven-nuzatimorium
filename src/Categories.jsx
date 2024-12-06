/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-boxed rounded-2xl flex flex-col gap-6  w-[100%] mx-auto py-5 bg-white">
            {
                categories.map(category => <NavLink role="tab" to={`/category/${category.category_name}`} key={category.category_id} className={({ isActive }) => `w-[90%] mx-auto text-center text-lg px-7 py-4 rounded-full ${isActive?"bg-[#9538E2] text-white font-bold":"bg-[#09080F0D] text-[#09080F99] font-medium"}`}>{category.category_name}</NavLink>)
            }
        </div>

    );
};

export default Categories;