import { Link } from "react-router-dom";
const Header = () => {
    return(
        
        <div className = "absolute px-32 py-8 bg-gradient-to-b from-black z-50 flex justify-between items-center w-full ">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt = "Netflix Logo" width = "150px" height = "50px"/>
            <div>
            <Link className = "bg-red-600 text-white rounded-md px-4 py-2 font-bold" to="/loginform">Sign In</Link>
            </div>
        </div>
        
    )
}

export default Header;