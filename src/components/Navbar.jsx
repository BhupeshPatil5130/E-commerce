/* eslint-disable react/prop-types */
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast/headless';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Directly access the cart slice
  const cart = useSelector((state) => state.cart);

  return (
    <div className="bg-black">
      <div className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to={"/"}>
          <div className='ml-5 font-bold text-xl text-white'>
            <p>Shopping Mart</p>
          </div>
        </NavLink>
        <div className='flex items-center font-medium text-white mr-5 space-x-6 '>
          <NavLink to={"/"}>
            <div>
              <p className='text-[20px]'>Home</p>
            </div>
          </NavLink>

          <NavLink to={"/cart"}>
            <div className='relative'>
              <FaCartShopping />
              {cart.length > 0 && (
                <span
                  className='absolute -top-1 -right-2 bg-green-400 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white'
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
        <div className='flex items-center gap-x-4'>
          {!isLoggedIn && 
            <Link to='/login'>
              <button className='bg-black text-white py-[8px] px-5 rounded-[8px] border border-gray-500'>
                Log in
              </button>
            </Link>
          }
          {!isLoggedIn && 
            <Link to="/signup">
              <button className='bg-black text-white py-[8px] px-5 rounded-[8px] border border-gray-500'>
                Sign Up
              </button>
            </Link>
          }
          {isLoggedIn && 
            <Link to="/"> 
              <button onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
                navigate('/');
              }} className='bg-black text-white py-[8px] px-5 rounded-[8px] border border-gray-500'>
                Log Out
              </button>
            </Link>
          }
          {isLoggedIn &&  
            <Link to="/">
              <button className='bg-black text-white py-[8px] px-5 rounded-[8px] border border-gray-500'>
                Home
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
