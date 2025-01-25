

const GadgetList = () => {
    return (
        <div className="card bg-base-200 max-w-[320px] shadow-sm">
            <figure className="px-5 pt-5">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>Price:  </p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-primary rounded-3xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default GadgetList;