import Template from "../components/Template";
// eslint-disable-next-line react/prop-types
const Signup = ({setIsLoggedIn}) =>{


    return(
        <div>
            <Template
        title={"Join the Online Shopping"}
        desc1={"Shop with us"}
        
       
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}

        />
        </div>

    )
 }

 export default Signup;