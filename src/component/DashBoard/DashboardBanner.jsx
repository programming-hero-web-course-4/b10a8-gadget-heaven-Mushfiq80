
import PropTypes from 'prop-types';

const DashboardBanner = ({handleDisplay}) => {
    return (
        <div className="text-center text-white bg-violet-500 pt-10 py-10 space-y-5">
            <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
            <p className="text-sm md:text-xs lg:text-lg w-2/3 mx-auto text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            <div className="flex justify-center space-x-5 mt-5">
                <button onClick={() =>handleDisplay("cart")} className="btn btn-primary text-white rounded-3xl px-10">Cart</button>
                
                <button onClick={()=>handleDisplay("wishlist")} className="btn btn-outline btn-primary text-white rounded-3xl px-10">Wishlist</button>
            </div>
        </div>
    );
};

DashboardBanner.propTypes = {
    handleDisplay: PropTypes.func.isRequired,
};

export default DashboardBanner;