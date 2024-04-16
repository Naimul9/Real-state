import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
       <NavLink to={'/'}><li>Home</li></NavLink> 
       <NavLink to={'/updateProfile'}> <li>Update Profile</li></NavLink>  
    </>

    return (
        <div className="navbar   bg-slate-200 max-w-screen-2xl mx-auto font-sans">
            <div className="navbar-start rounded-2xl">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Doaa Real Estate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-3 px-1 font-normal text-[18px]">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
              <Link to={'/login'}> <a className="btn">Login</a></Link> 
            </div>
        </div>
    );
};

export default Navbar;