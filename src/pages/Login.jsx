
import Template from "../components/Template";



const login=({setIsLoggedIn})=>{

    return(
        <Template
        title={"Welcome User"}
        desc1={"Join With Us"}
        desc2={"Discover your world of shopping online. "}
       
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}

        />
    );


}

export default login;