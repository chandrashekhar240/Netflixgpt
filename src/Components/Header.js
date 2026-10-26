import{useSelector , useDispatch} from "react-redux";
import {Link , useNavigate} from 'react-router-dom';
import {removeUser} from "../utils/userSlice";

const Header = () => {
    const Navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(removeUser());
        Navigate("/");
    };

    return (
            <div className = "absolute px-32 py-8 bg-gradient-to-b from-black z-50 flex justify-between items-center w-full ">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt = "Netflix Logo" width = "150px" height = "50px"/>

            {user ? (
            <div className="flex items-center space -x-4">
                <span className="text-white font-bold">{user.displayName}</span>
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
