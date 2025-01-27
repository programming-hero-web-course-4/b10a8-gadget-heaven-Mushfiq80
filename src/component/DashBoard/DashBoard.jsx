import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import Wishlist from "../WishList/Wishlist";
import Cart from "../Cart/Cart";
import DashboardBanner from "./DashboardBanner";




const DashBoard = () => {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const allProducts = useLoaderData();


    useEffect(() => {
        const cartList = getStoredReadList();
        const cartProducts = allProducts.filter(product => cartList.includes(product.product_id));
        setCart(cartProducts);
    }, [allProducts])

    useEffect(() => {
        const wishlist = getStoredWishList();
        const wishlistProducts = allProducts.filter(product => wishlist.includes(product.product_id));
        setWishlist(wishlistProducts);
    }, [allProducts])

    const handleSort = () =>{
        const cartList = getStoredReadList();
        const storedCart = allProducts.filter(product => cartList.includes(product.product_id))
        // console.log(storedCart);
        const sortCart = storedCart.sort((a,b) => b.price - a.price);
        console.log(sortCart);
        setCart(sortCart);
        // console.log(allProducts.map(product => console.log(product.price)));
    }

    // Display Rendering between cart and wishlist 
    const [display, setDisplay] = useState({
        Render: true,
        Status: 'cart'
    });
    const handleDisplay = (Status) => {
        if (Status === 'cart') {
            setDisplay({ Render: true, Status: 'cart' });
        } else {
            setDisplay({ Render: false, Status: 'wishlist' });
        }
    }

    return (
        <div>
            <DashboardBanner handleDisplay={handleDisplay}></DashboardBanner>


            {
                display.Status === 'cart' && <Cart product={cart} setCart={setCart} handleSort={handleSort}></Cart>
                // cart.map( product => <Cart key={product.product_id} product={product}></Cart>)
            }

            {
                display.Status === 'wishlist' && <Wishlist wishlist={wishlist}></Wishlist>
                // wishlist.map( product => <Wishlist key={product.product_id} product={product}></Wishlist>)
            }
        </div>
    );
};

export default DashBoard;