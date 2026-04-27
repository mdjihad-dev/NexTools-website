
import Digitools from '../../assets/Image/design-tools.png'
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="my-5 flex justify-between items-center px-6 bg-base-100 shadow-sm max-w-7xl mx-auto">
      <div className="">
        <img
          className="w-36 h-auto object-cover"
          src={Digitools}
          alt="digitools image"
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center gap-5">
          <li>
            <a className="text-base text-[#101727] font-semibold">Products</a>
          </li>
          <li>
            <a className="text-base text-[#101727] font-semibold">Features</a>
          </li>
          <li>
            <a className="text-base text-[#101727] font-semibold">Pricing</a>
          </li>
          <li>
            <a className="text-base text-[#101727] font-semibold">
              Testimonials
            </a>
          </li>
          <li>
            <a className="text-base text-[#101727] font-semibold">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3.5">
        <IoCartOutline className='w-6 h-auto'/>
        <button className="btn">Login</button>
        <button className="btn bg-linear-to-r bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;