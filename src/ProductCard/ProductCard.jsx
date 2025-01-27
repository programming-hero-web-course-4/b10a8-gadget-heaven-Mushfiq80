import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ gadget }) => {

    const { product_id, product_title, price, product_image  } = gadget;
    return (
        <div className="card bg-base-200 max-w-[320px] shadow-sm">
            <figure className="px-5 pt-5">
                <img
                    src={product_image}
                    className="rounded-x w-64 h-52 " />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price} $ </p>
                <div className="card-actions">
                    <Link to={`/details/${product_id}`}  className="btn btn-outline btn-primary rounded-3xl">View Details</Link>
                    
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    gadget: PropTypes.shape({
        product_id: PropTypes.string.isRequired,
        product_title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        product_image: PropTypes.string
    }).isRequired
};

export default ProductCard;
