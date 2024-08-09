import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label>
        <p className="text-[20px] text-richblack-5 mb-1 leading-[1.375rem] text-black">
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter the Email"
          name="email"
          className="bg-gray-200 border-2 border-gray-500 rounded-[0.6rem] text-richblack-5 w-full p-[12px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-black text-[20px] text-richblack-5 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-400">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="bg-gray-200 border-2 border-gray-500 rounded-[0.60rem] text-richblack-5 w-full p-[12px]"
        />

        <span
          className="absolute right-3 top-10 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="black" />
          ) : (
            <AiOutlineEye fontSize={24} fill="black" />
          )}
        </span>

        <Link to="#" className="text-xs mt-1 text-blue-100 w-full mx-auto">
          <p className="text-xs mt-1 text-blue-400 max-w-max ml-auto">
            Forget Password
          </p>
        </Link>
      </label>
      <button className="bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px]">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
