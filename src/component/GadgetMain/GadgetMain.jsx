import { useState } from "react";
import GadgetList from "../GadgetList/GadgetList";
import SideNavBar from "../SideNavBar/SideNavBar";

const GadgetMain = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Product");
    return (
        <div className="flex flex-col md:flex-row gap-5">
            <SideNavBar setSelectedCategory={setSelectedCategory}></SideNavBar>            
            <GadgetList selectedCategory={selectedCategory}></GadgetList>
        </div>
    );
};

export default GadgetMain;