
const CartCard = () => {
    return (
        <div className="flex gap-10 p-5 bg-base-300 shadow-2xl items-center">
            <div>
                <img className="w-[200px] h-[124px]" src="" alt="" />
            </div>
            <div>
                <h1>Product Name</h1>
                <p>Description</p>
                <p>Price: 1000$</p>
            </div>

        </div>
    );
};

export default CartCard;