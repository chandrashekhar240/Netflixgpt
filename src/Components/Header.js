
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    // Listen to Firebase authentication changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }));
            } else {
                dispatch(removeUser());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearch());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const showGptSearch = useSelector(store => store.gpt?.showGptSearch);

    return (
        <div className="absolute px-24 py-8 bg-gradient-to-b from-black z-50 flex justify-between items-center w-full">

            <img src={LOGO} alt="Netflix Logo" width="120px" height="40px" />
            {user ? (
                <div className="flex items-center space-x-2">
                    <span className="text-white font-bold">
                        {user.displayName}
                    </span>
                    {showGptSearch && <select className="px-2 py-1 rounded-md bg-black text-white font-semibold opacity-60 " onChange ={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.code} value= {lang.code}>{lang.name}</option>)}
                </select>}
                    <button className="px-2 py-1 bg-teal-950 text-white rounded-md font-bold"onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button> 
                    <button
                        onClick={handleSignOut}
                        className="px-2 py-1 bg-red-600 text-white font-bold rounded"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <Link
                    to="/loginform"
                    className="px-4 py-2 bg-red-600 text-white font-bold rounded"
                >
                    Sign In
                </Link>
            )}
            </div>
    );
};

export default Header;
