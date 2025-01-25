
const SideNavBar = () => {
    return (
        <div>
            <ul className="menu bg-base-100 shadow-2xl w-48 space-y-5">
                <li><button className="rounded-3xl bg-base-300">All Product</button></li>
                <li><button className="rounded-3xl bg-base-300">Laptops</button></li>
                <li><button className=" rounded-3xl bg-base-300 menu-active">Phones</button></li>
                <li><button className="rounded-3xl bg-base-300">Accessories</button></li>
                <li><button className="rounded-3xl bg-base-300">Smart Watches</button></li>
                <li><button className="rounded-3xl bg-base-300">MacBook</button></li>
                <li><button className="rounded-3xl bg-base-300">iPhone</button></li>
            </ul>
        </div>
    );
};

export default SideNavBar;