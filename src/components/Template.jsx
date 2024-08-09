import LoginForm from'./LoginForm';
import SignupForm from "./SignupForm";
import { FcGoogle } from 'react-icons/fc';
import image from '../assets/daniel-l-iOQ0VZN-apo-unsplash.jpg'



// eslint-disable-next-line react/prop-types
const Template = ({title,desc1,desc2,formtype,setIsLoggedIn}) => {
  // console.log(formtype)
  return (
   
    <div className='h-[850px]  p-8  flex w-11/12 max-w-[960px] py-12 mx-auto gap-x-12 gap-y-0  mt-12 '>
        <div className='w-11/12 max-w-[450px]'>
                 <h1
                 className='font-semibold text-[40px] leading-[2.375rem] text-black '>{title}</h1>
                 <p className='text=[1.1225rem] leading[1.625rem] mt-4' > 
                    <span className='text-black-100 text-black text-[25px]'>{desc1}</span>
                     <br />
                    <span className=' italic text-black  text-[20px]'>{desc2} </span>
                 </p>
                 {
                    formtype=="signup"?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                 }

                 <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] bg-grey-700'></div>
                    <p className='text-black font-medium leading-[1.375rem] text-[20px] h-full text-center flex justify-center pl-[12.5rem]'>
                                     OR
                     </p >
                    <div className='h-[1px] bg-grey-700'></div>
                 </div>
                 
                 <button className=' bg-black h-[50px] w-11/12 flex justify-center items-center rounded-[8px] font-medium text-gray-100 border hover:bg-gray-600'>
                  <FcGoogle/>
                        <p>Sign up with Google</p>
                 </button>

                 </div>
                  <div>
                     <img src={image} width={668} 
                           height={504} 
                           className='pl-12 ml-12 w-[668px] object-fill'
                     />
                  </div>
                

      
        
        
    </div>
  )
}

export default Template