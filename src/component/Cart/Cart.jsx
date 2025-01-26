
import PropTypes from 'prop-types';
import CartCard from '../CartCard/CartCard';

const Cart = ({ product }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5">
                <h1 className='text-xl font-semibold md:text-base'>Cart</h1>
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <h1>Total Cost: </h1>
                    <button className="btn btn-primary rounded-3xl px-10">Sort by Price</button>
                    <button className="btn btn-primary rounded-3xl px-10">Purchase</button>
                </div>
            </div>
            <div className="flex flex-col gap-5 p-5">
                {
                    product.map(product => <CartCard key={product.product_id} product={product}></CartCard>)
                }

            </div>
        </div>
    );
};
Cart.propTypes = {
    product: PropTypes.arrayOf(PropTypes.shape({
        product_id: PropTypes.number.isRequired,
        // add other product properties here if needed
    })).isRequired,
};

export default Cart;