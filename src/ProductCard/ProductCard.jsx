import { Link } from "react-router-dom";

const ProductCard = ({ gadget }) => {

    const { product_id, product_title, price, product_image  } = gadget;
    return (
        <div className="card bg-base-200 max-w-[320px] shadow-sm">
            <figure className="px-5 pt-5">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
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

export default ProductCard;
