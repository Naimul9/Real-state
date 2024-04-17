import  { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);

    const handleLogOut = () => {
        LogOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error));
    };

    const toggleHover = () => {
        setIsHovering(!isHovering);
    };

    const navLinks = (
        <>
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'/updateProfile'}><li>Update Profile</li></NavLink>
            {user && (
                <NavLink to={"/userprofile"}><li>About Us</li></NavLink>
            )}
        </>
    );

    return (
        <div className="navbar bg-slate-200 w-full lg:max-w-screen-2xl mx-auto font-poppins">
            <div className="navbar-start rounded-2xl">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-2xl">Doaa Real Estate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-10 px-1 font-semibold text-[18px]">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="relative group" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img alt="User Avatar" src={user.photoURl} />
                            </div>
                        </div>
                        {isHovering && (
                            <div className="absolute bg-white text-black text-sm py-1 px-2 rounded-md shadow top-10 right-0">
                            {user.displayName}
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to={'/login'}>
                        <button className="btn btn-sm">Login</button>
                    </Link>
                )}
                {user && (
                    <button onClick={handleLogOut} className="btn">Sign Out</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
