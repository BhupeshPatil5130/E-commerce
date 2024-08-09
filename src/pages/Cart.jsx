/* eslint-disable no-undef */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]); 

  return (
    <div className="flex flex-row align justify-between">
      {cart.length > 0 ? (
        <div className="">
          {cart.map((item, index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />; // Pass index correctly
          })}
        </div>
      ) : (
        <div className="text-center flex flex-col w-[1100px]  p-[24rem]  h-[1400px]   ">
          <p className="text-[35px] text-center font-bold pb-12 h" >Your Cart is Empty</p>
          <Link to={"/"}>
            <button className="bg-black  p-3 rounded-lg hover:bg-slate-500 pt-15">Shop now</button>
          </Link>
        </div>
      )}

      <div className="flex flex-col justify-start w-[700px]  pt-10 h-[1400px]   ">
      <div className="flex flex-col">
        <div className="  pb-10 text-[40px]">Your Cart</div>
        <div className="text-[25px]">Summary</div>
        <p>
          <span className=" text-xl pt-10 mt-10 h-[150px]">Total items: {cart.length}</span>
        </p>
      </div>
      <div className="bottom-9 flex flex-col justify-end h-[400px]">
        <p className="text-xl">Total Amount: <span className="text-green-600 font-bold"> $ {totalAmount} </span></p>
        <button className="bg-black p-3 rounded-lg hover:bg-slate-800 pt-15 text-white" >
          CheckOut now
        </button>
      </div>
      </div>
  

    </div>
  );
};

export default Cart;
