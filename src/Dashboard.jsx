import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="w-full bg-[#9538E2] text-white text-center">
                <h2 className="pt-8 text-4xl font-bold">Dashboard</h2>
                <p className="w-[55%] mx-auto mt-4 pb-8 text-base font-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="pb-10 space-x-6">
                    <NavLink to="/Dashboard/cart" className={({ isActive }) =>
                        `border rounded-full py-4 px-16 ${isActive ? 'bg-white text-[#9538E2] font-extrabold' : 'bg-[#9538E2] text-white'}`
                    }>Cart
                    </NavLink>
                    <NavLink to="/Dashboard/wishlist" className={({ isActive }) =>
                        `border rounded-full py-4 px-16 ${isActive ? 'bg-white text-[#9538E2] font-extrabold' : 'bg-[#9538E2] text-white'}`
                    }>Wishlist
                    </NavLink>
                </div>
            </div>
            <div  className="mx-40 mt-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;