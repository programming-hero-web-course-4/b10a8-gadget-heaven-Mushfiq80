import PropTypes from "prop-types";
import CartCard from "../CartCard/CartCard";
import { toast } from "react-toastify";
import { TotalCost } from "../../layout/Root";
import { useContext } from "react";
import imageIcon from "../../../public/Assets/Group.png"

const Cart = ({ product, setCart, handleSort }) => {
  const handlePurchase = () => {
    if (product.length != 0) {
      // toast.error("Cart is empty. Please add items to cart first.");
      document.getElementById('my_modal_5').showModal();
      toast.success("Purchase successful! Cart is now empty.");
      
    }else{
      toast.warning("Cart is already empty.");
    }
    
    setCart([]);
    localStorage.removeItem("read-list");
    setCost(0);
    
  };

  const [Cost, setCost] = useContext(TotalCost);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5">
        <h1 className="text-xl font-semibold md:text-base">Cart</h1>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <h1>Total Cost:$ <span className="font-semibold">{Cost}</span></h1>
          <button onClick={handleSort} className="btn btn-primary rounded-3xl px-10">Sort by Price</button>


          <button className="btn btn-primary rounded-3xl px-10" onClick={handlePurchase}>Purchase</button>

        </div>
      </div>
      <div className="flex flex-col gap-5 p-5">
        {product.map((product) => (
          <CartCard key={product.product_id} product={product}></CartCard>
        ))}
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center  p-12 "> 
          <img src={imageIcon} alt="" />
          <h3 className="font-bold text-lg">Payment Successful!</h3>
          <div className="divider"></div>
          <p className="py-4">Thanks for Purchasing.</p>
          <p className="py-4">Total: {Cost}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

Cart.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      product_id: PropTypes.number.isRequired,
      // add other product properties here if needed
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired, // Pass the state updater function
};

export default Cart;
