import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../ProductCard/ProductCard";

const GadgetList = ({ selectedCategory }) => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch("./product.json")
            .then((response) => response.json())
            .then((data) => setGadgets(data));
            // .then((data) => console.log(data));
    }, []);

    const filteredGadgets = gadgets.filter((gadget) =>
        selectedCategory === "All Product" ? true : gadget.category === selectedCategory
    );

    return (
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {filteredGadgets.map((gadget) => (<ProductCard key={gadget.product_id} gadget={gadget}></ProductCard>))}
        </div>
    );
};

GadgetList.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
};


export default GadgetList;
