
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";


const ProductDetails = () => {

    const { id } = useParams();

    const data = useLoaderData();

    const product = data.find(product => product.product_id === id);
    console.log(product);

    const { product_title, price, product_image, description, specification, rating } = product;


    const inStock = <>
        <div className="badge badge-success">In Stock</div>
    </>
    const outOfStock = <>
        <div className="badge badge-error">Out of Stock</div></>

    return (
        <div className="bg-base-200 pb-10">
            <div className="text-center text-white bg-violet-500 pt-10 h-[375px]">
                <h1 className="text-xl md:text-3xl font-semibold">Product Details</h1>
                <p className="text-sm md:text-xs w-1/2 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            {/* PRoduct Details card  */}
            <div className="flex justify-evenly lg:card-side bg-base-100 rounded-2xl shadow-sm -mt-28 md:w-3/4 mx-auto p-4">
                <div>
                    <img className="rounded-lg w-[425px] h-[505px] object-contain"
                        src={product_image} />
                </div>
                <div className="card-body flex-none">
                    <h2 className="text-2xl md:text-3xl">{product_title}</h2>
                    <p className="font-semibold text-lg md:text-xl ">Price: $ {price}</p>
                    {product.available ? inStock : outOfStock}
                    <p className="text-slate-500 text-xs md:text-lg">{description}</p>

                    <ul className="divide-y divide-gray-200">
                        <div className="flex-1">
                            <p className="font-semibold">Specifications</p>
                            <ul className="text-sm md:text-base text-slate-500">
                                {specification.map((item, index) => (
                                    <li key={index}>{index + 1}. {item}</li>
                                ))}
                            </ul>
                        </div>
                    </ul>

                    <h1>Rating:</h1>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex">
                            {Array.from({ length: 5 }, (_, index) => {
                                const starValue = index + 1; // 1-based index for star values
                                if (rating >= starValue) {
                                    // Full star
                                    return <FaStar key={index} className="text-orange-500 text-2xl" />;
                                } else if (rating >= starValue - 0.5) {
                                    // Half star
                                    return <FaStarHalfAlt key={index} className="text-orange-500 text-2xl" />;
                                } else {
                                    // Empty star
                                    return <FaRegStar key={index} className="text-gray-300 text-2xl" />;
                                }
                            })}
                        </div>
                        <p className="">{rating}</p>
                    </div>
                    <div className="card-actions flex gap-5 items-center">
                        <button className="btn btn-primary rounded-2xl" disabled={!product.available}>Add to Cart <BsCart4 className="text-xl"/></button>
                        <button className="text-3xl rounded-full outline p-1 btn"><CiHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
