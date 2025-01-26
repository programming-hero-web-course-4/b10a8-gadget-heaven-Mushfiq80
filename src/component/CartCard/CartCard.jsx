import PropTypes from 'prop-types';

const CartCard = ({ product }) => {
    const { product_title, description, price, product_image  } = product;
    return (
        <div className="flex gap-10 p-5 bg-base-300 shadow-2xl items-center">
            <div>
                <img className="w-[200px] h-[124px] object-contain" src={product_image} alt="" />
            </div>
            <div>
                <h1 className='text-xl font-bold'>{product_title}</h1>
                <p className='text-gray-500'>{description}</p>
                <p className='font-semibold'>Price: $ {price}</p>
            </div>

        </div>
    );
};


CartCard.propTypes = {
    product: PropTypes.shape({
        product_title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        product_image: PropTypes.string.isRequired,
    }).isRequired,
};

export default CartCard;