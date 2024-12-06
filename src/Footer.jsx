import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-center py-20 px-36 bg-white mt-20">
            <Link to={"/"} className="text-[#09080F] text-3xl font-bold mb-3">Gadget Heaven</Link>
            <p className="text-[#09080F99] font-medium mb-8">Leading the way in cutting-edge technology and innovation.</p>
            <div className="border-b-2"></div>
            <div className="flex justify-around text-[#09080F99] mt-8">
                <div className="space-y-4">
                    <h5 className="text-[#09080F] text-lg font-bold">Services</h5>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>
                <div className="space-y-4">
                    <h5 className="text-[#09080F] text-lg font-bold">Company</h5>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="space-y-4">
                    <h5 className="text-[#09080F] text-lg font-bold">Legal</h5>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;