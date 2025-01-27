import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { createContext, useState } from "react";

export const TotalCost = createContext(0);

const Root = () => {

    const [Cost, setCost] = useState(0);

    return (
        <div>
            <Header></Header>
            <TotalCost.Provider value={[Cost, setCost]}>
                <Outlet />
            </TotalCost.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;