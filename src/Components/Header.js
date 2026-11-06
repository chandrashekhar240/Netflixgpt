import{useSelector , useDispatch} from "react-redux";
import {Link , useNavigate} from 'react-router-dom';
import {removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const Navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(removeUser());
        Navigate("/");
    };

    

    return (
            <div className = "absolute px-24 py-8 bg-gradient-to-b from-black z-50 flex justify-between items-center w-full ">
            <img src = {LOGO} alt = "Netflix Logo" width = "120px" height = "40px"/>

            {user ? (
            <div className="flex items-center space -x-4">
                {/* <span className="text-white font-bold">{user.displayName}</span> */}
                <button
                    onClick = {handleSignOut}
                    className="px-4 py-2 bg-red-600 text-white font-bold rounded">Sign Out</button>
                    </div>) :(
                        <div>
                            <Link to ="/LogInForm" className="px-4 py-2 bg-red-600 text-white font-bold rounded">Sign In</Link>
                            </div>)
                }
            </div>
    )
}

export default Header;
