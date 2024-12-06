import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="max-w-[95%] mx-auto">
            <div className="bg-[#9538E2] rounded-b-2xl relative mb-[450px]">
                <h1 className="text-center max-w-[75%] mx-auto pt-10 pb-6 text-white text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="max-w-[55%] mx-auto text-center text-white pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="pb-64 text-center ">
                    <Link to="/Dashboard"><button className="btn rounded-full text-[#9538E2] px-7 py-4">Shop Now</button></Link>
                </div>
            </div>
            <div className="absolute z-10 inset-x-0 top-[400px] bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 w-[60%] mx-auto border-2 border-white p-4 rounded-[32px] ">
                <div className="h-[563px] flex justify-center">
                    <img className="rounded-3xl h-full" src="https://i.ibb.co.com/2nFYqxy/banner.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;