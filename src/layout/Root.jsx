import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { createContext, useState } from "react";
import { Helmet } from "react-helmet";

export const TotalCost = createContext(0);

const Root = () => {

    const [Cost, setCost] = useState(0);

    return (
        <div>
            <Header></Header>
            <Helmet>
                <title>Home | Gadget Capital</title>
                <meta name="description" content="Gadget Capital for your exclusive new gadget store" />
            </Helmet>
            <TotalCost.Provider value={[Cost, setCost]}>
                <Outlet />
            </TotalCost.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;