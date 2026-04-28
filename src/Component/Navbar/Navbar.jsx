import Digitools from "../../assets/Image/design-tools.png";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = ({ choose }) => {
  const [open, setOpen] = useState(false); // ✅ toggle state

  return (
    <div className="my-5 px-4">
      <div className="flex justify-between items-center bg-base-100 shadow-sm max-w-7xl mx-auto py-3 px-4 rounded-xl">
        {/* Logo */}
        <img className="w-32" src={Digitools} alt="digitools image" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-5">
          <li>
            <a className="font-semibold">Products</a>
          </li>
          <li>
            <a className="font-semibold">Features</a>
          </li>
          <li>
            <a className="font-semibold">Pricing</a>
          </li>
          <li>
            <a className="font-semibold">Testimonials</a>
          </li>
          <li>
            <a className="font-semibold">FAQ</a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <div className="relative">
            <IoCartOutline className="w-7 h-7" />
            {choose.length > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {choose.length}
              </div>
            )}
          </div>

          {/* Buttons */}
          <button className="hidden lg:block btn">Login</button>
          <button className="hidden lg:block btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
            Get Started
          </button>

          {/* Mobile Toggle Button */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden max-w-7xl mx-auto bg-white shadow-md mt-2 rounded-xl p-5 space-y-4">
          <a className="block">Products</a>
          <a className="block">Features</a>
          <a className="block">Pricing</a>
          <a className="block">Testimonials</a>
          <a className="block">FAQ</a>

          <button className="btn w-full">Login</button>
          <button className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
