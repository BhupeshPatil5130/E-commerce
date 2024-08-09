/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { toast } from 'react-toastify';
import { add,remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';


const Product = ({post}) => {

    const cart = useSelector((state) => state.cart);
  const dispatch =useDispatch();

  const addtoCart=()=>{
    dispatch(add(post));
    toast.success("Item added to Cart")
     }

     const removeFromCart=()=>{
      dispatch(remove(post.id))
      toast.error("item removed From Cart")
     }

  return (
    <div className='flex flex-col items-center justify-between border-gray-200 hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline '>
      <div>
        <p className='text-gray-900 font-semibold text-lg text-left truncate w-40 mt-1 '>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-black font-normal text-[10px] text-left'>{post.description}</p>
      </div>
      <div className='h-[180px]'>
      <img src={ post.image} className='h-full w-full border- rounded-md  ' />
      </div>
      <div>
        <p className='text-green-600 font-bold text-[20px]'>${post.price}</p>
      </div>

      {
        cart.some((p)=>p.id === post.id)?
        (<button
        className=' text-white bg-black border-2 border-black rouded-full font-semibold teext-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
        onClick={removeFromCart} >
          Remove Item
        </button>):
        (
          <button 
          className=' text-white bg-black border-2 border-gray-700 rouded-full font-semibold teext-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'onClick={addtoCart}>
            Add To Cart
          </button>
        )
      }
    </div>
  )
}

export default Product
