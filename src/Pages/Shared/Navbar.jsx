import { Link } from "react-router-dom";
const Navbar = () => {
    const Navlinks = <>
        <Link>Home</Link>
        <Link>Contuct Us</Link>
        <Link>Dashboard</Link>
        <Link to='/menu'>Our Menu</Link>
        <Link to='/order'>Order</Link>
    </>
    return (
      <div className="navbar fixed z-10 bg-opacity-25 bg-black max-w-screen-xl text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm text-white font-extrabold space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-52">
                  {Navlinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white"><span className="font-bold">BISTRO BOSS</span><span className="font-medium">Restaurant</span></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white space-x-3 font-extrabold">
                {Navlinks}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
      </div>
    );
};

export default Navbar;