/* eslint-disable react/prop-types */
//* eslint-disable react/prop-types */
import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  const des = (description, limit) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className=' '>
    <div className='flex flex-row w-full justify-center h-[250px]  m-3    '>
  <div className='flex flex-row text-center items-center pl-[490px]  '>
    <div>
      <img src={item.image} alt="" className='h-[220px] w-[200px]  ' />
    </div>
    <div className='items-center w-[400px] p-9 text-center h-[250px] flex flex-col '>
    
      <h1 className='font-semibold  text-[20px] pb-4 text-left'>{item.title}</h1>
      
      <h1 className='pb-3 text-left'>{des(item.description, 15)}</h1>
     
      <div  onClick={removeFromCart} className='cursor-pointer flex flex-row justify-between w-9/12 '>
       
        <p className='font-bold text-green-600 text-left'>{item.price}</p>
       
        <div onClick={removeFromCart} className='cursor-pointer border bg-red-300 rounded-full w-9 h-9 flex items-center justify-center'>
          <MdDelete color='red' />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default CartItem;
