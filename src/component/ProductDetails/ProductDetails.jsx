import { useLoaderData, useParams } from "react-router-dom";


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
        <div>
            <div className="text-center text-white bg-violet-500 pt-10 h-[375px]">
                <h1 className="text-xl md:text-3xl font-semibold">Product Details</h1>
                <p className="text-sm md:text-xs w-1/2 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            {/* PRoduct Details card  */}
            <div className="card lg:card-side bg-base-100 shadow-sm -mt-28 md:w-3/4 lg:w-2/4 mx-auto p-4">
                <figure>
                    <img className="rounded-lg object-cover"
                        src={product_image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: $ {price}</p>
                    {product.available ? inStock : outOfStock}
                    <p>{description}</p>

                    <ul className="divide-y divide-gray-200">
                        <div className="flex-1">
                            <p className="font-semibold">Specifications</p>
                            <ul>
                                {specification.map((item, index) => (
                                    <li key={index}>{index+1}. {item}</li>
                                ))}
                            </ul>
                        </div>
                    </ul>

                    <h1>Rating:</h1>
                    <p>{rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
