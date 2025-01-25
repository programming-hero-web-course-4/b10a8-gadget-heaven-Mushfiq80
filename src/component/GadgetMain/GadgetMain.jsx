import GadgetList from "../GadgetList/GadgetList";
import SideNavBar from "../SideNavBar/SideNavBar";

const GadgetMain = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5">
            <SideNavBar></SideNavBar>            
            <GadgetList></GadgetList>
        </div>
    );
};

export default GadgetMain;