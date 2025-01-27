import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-violet-500 text-white text-center pt-20 pb-36 space-y-8">

            <h1 className="text-3xl md:text-5xl w-2/3 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>

            <p className="text-sm w-3/4 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            <Link to="/dashboard" className="btn">Shop Now</Link>
        </div>
    );
};

export default Hero;