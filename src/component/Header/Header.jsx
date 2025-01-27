import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    // Check if the current location is "/"
    const isHomePage = location.pathname === "/";

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => "nav-link " + (isActive ? "bg-black text-white" : "")}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={({ isActive }) => "nav-link " + (isActive ? "bg-black text-white" : "")}>
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({ isActive }) => "nav-link " + (isActive ? "bg-black text-white" : "")}>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/exclusive" className={({ isActive }) => "nav-link " + (isActive ? "bg-black text-white" : "")}>
                    Exclusive
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`navbar shadow-sm ${isHomePage ? "bg-violet-500 text-white" : "bg-white text-black"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Capital</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;
