import CartCard from "../CartCard/CartCard";
import PropTypes from 'prop-types';


const Wishlist = ({ wishlist }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5">
                <h1 className='text-xl font-semibold md:text-base'>Wishlist</h1>
            </div>
            <div className="flex flex-col gap-5 p-5">
                {
                    // product.map(product => <CartCard key={product.product_id} product={product}></CartCard>)
                    wishlist.map(product => <CartCard key={product.product_id} product={product}></CartCard>)
                }

            </div>
        </div>
    );
};
Wishlist.propTypes = {
    wishlist: PropTypes.arrayOf(PropTypes.shape({
        product_id: PropTypes.number.isRequired,
        // Add other product properties here if needed
    })).isRequired,
};

export default Wishlist;