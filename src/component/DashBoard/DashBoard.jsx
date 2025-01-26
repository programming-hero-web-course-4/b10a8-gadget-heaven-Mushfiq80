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

    useEffect( ()=>{
        const cartList = getStoredReadList();
        const cartProducts = allProducts.filter( product => cartList.includes(product.product_id));
        setCart(cartProducts);
    },[allProducts])

    useEffect( ()=>{
        const wishlist = getStoredWishList();
        const wishlistProducts = allProducts.filter( product => wishlist.includes(product.product_id));
        setWishlist(wishlistProducts);
    },[allProducts])


    return (
        <div>
            <DashboardBanner></DashboardBanner>
            
            {
                // cart.map( product => <Cart key={product.product_id} product={product}></Cart>)
                <Cart product={cart}></Cart>
            }
            {
                wishlist.map( product => <Wishlist key={product.product_id} product={product}></Wishlist>)
            }
        </div>
    );
};

export default DashBoard;