/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showpassword, setShowpassword] = useState(false);
  

  function changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submithandler(e) {
    e.preventDefault();
    if (formData.password != formData.confirmpassword) {
      toast.error("Password does not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created");
    const accountData = {
      ...formData,
    };
    console.log("printing account data");
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
     

      <form onSubmit={submithandler}>
        <div className="flex gap-x-4 mt-[10px]">
          <label htmlFor="" className="w-full  ">
            <p className="text-[19px] text-richblack-5 mb-1 leading-[1.375rem] ">
              First Name <sup className="text-red-900">*</sup>
            </p>

            <input
              type="text"
              name="firstName"
              onChange={changehandler}
              placeholder="Enter the First Name"
              value={formData.firstName}
              className="bg-gray-200 border-2 border-gray-500   rounded-[0.60rem] text-richblack-5 w-full p-[12px] "
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[19px] text-richblack-5 mb-1 leading-[1.375rem] ">
              Last Name <sup className="text-red-900">*</sup>
            </p>

            <input
              required
              type="text"
              name="lastname"
              onChange={changehandler}
              className="bg-gray-200 border-2 border-gray-500   rounded-[0.60rem] text-richblack-5 w-full p-[12px]"
              placeholder="Enter the Last Name"
              value={formData.lastname}
            />
          </label>
        </div>

          <div className="mt-[20px]">
          <label htmlFor="" className="w-full mt-[10px]" >
          <p className="text-[19px]">
            Email Addresss <sup className="text-red-900">*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            onChange={changehandler}
            placeholder="Enter Email Address"
            className="bg-gray-200 border-2 border-gray-500   rounded-[0.60rem] text-richblack-5 w-full p-[12px]"
            value={formData.email}
          />
        </label>
          </div>
       

        {/* Password nad conform password */}
        <div className="flex gap-x-4 w-full mt-[10px] ">
          <label htmlFor="" className="w-full relative">
            <p className="text-[19px] text-richblack-5 mb-1 leading-[1.375rem] ">
              
              Create Password <sup className="text-red-900">*</sup>
            </p>

            <input
              required
              type={showpassword ? "text" : "password"}
              value={formData.password}
              onChange={changehandler}
              placeholder="Enter Password"
              name="password"
              className="bg-gray-200 border-2 border-gray-500   rounded-[0.60rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => {
                setShowpassword((prev) => !prev);
              }}
            >
              {showpassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="black" />
              ) : (
                <AiOutlineEye fontSize={24} fill="black" />
              )}
            </span>
          </label>

          <label className="relative w-full">
            <p className="text-[19px] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-red-900">*</sup>
            </p>

            <input
              required
              type={showpassword ? "text" : "password"}
              value={formData.confirmpassword}
              onChange={changehandler}
              placeholder="Confirm Password"
              name="confirmpassword"
              className="bg-gray-200 border-2 border-gray-500   rounded-[0.60rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => {
                setShowpassword((prev) => !prev);
              }}
            >
              {showpassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="black" />
              ) : (
                <AiOutlineEye fontSize={24} fill="black" />
              )}
            </span>
          </label>
        </div>
        <br />
        <button className=" w-full bg-yellow-500 rounded-[8px]  font-medium text-black px-[12px] py-[8px]">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
