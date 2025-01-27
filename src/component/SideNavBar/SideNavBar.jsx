import PropTypes from 'prop-types';
import { useState } from 'react';

const SideNavBar = ({ setSelectedCategory }) => {
    const [activeCategory, setActiveCategory] = useState("All Product");

    const categories = [
        "All Product",
        "Laptop",
        "Phone",
        "Accessories",
        "Smart Watches",
        "MacBook",
        "iPhone",
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category); 
        setSelectedCategory(category); 
    };

    return (
        <div>
            <ul className="menu bg-base-100 shadow-2xl w-48 space-y-5">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => handleCategoryClick(category)}
                            className={`rounded-3xl ${
                                activeCategory === category
                                    ? "bg-black text-white"
                                    : "bg-base-300 hover:bg-base-200"
                            }`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

SideNavBar.propTypes = {
    setSelectedCategory: PropTypes.func.isRequired,
};

export default SideNavBar;
