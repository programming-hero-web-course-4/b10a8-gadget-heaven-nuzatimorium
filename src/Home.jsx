import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
                    <h1 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="md:grid grid-cols-4 pt-14">
                <div className="w-[200px] mx-auto">
                    <Categories categories={categories}></Categories>
                </div>
                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;