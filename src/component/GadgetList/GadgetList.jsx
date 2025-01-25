import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../ProductCard/ProductCard";


const GadgetList = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect( () => {
        fetch('./product.json')
            .then(response => response.json())
            .then(data => setGadgets(data))
    }, [])

    return (
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
                gadgets.map( gadget => <ProductCard 
                key={gadget.product_id}
                gadget={gadget}
                ></ProductCard>)
            }
        </div>
    );
};

export default GadgetList;