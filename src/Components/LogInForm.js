
import { useRef, useState } from "react";
import { Validata } from "../utils/Validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {

    const navigate = useNavigate();

    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
        setErrMessage(null);
    };

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const [errMessage, setErrMessage] = useState(null);

    const handleButtonClick = async () => {

        // Form Validation
        const msg = Validata(
            email.current.value,
            password.current.value
        );

        setErrMessage(msg);

        if (msg) return;

        // Check Full Name during Sign Up
        if (!isSignInForm && !name.current.value.trim()) {
            setErrMessage("Please enter your Full Name");
            return;
        }

        try {

            // Sign Up Logic
            if (!isSignInForm) {

                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email.current.value,
                    password.current.value
                );

                const user = userCredential.user;

                // Update User Profile
                await updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                });

                navigate("/browse");

            }

            // Sign In Logic
            else {

                await signInWithEmailAndPassword(
                    auth,
                    email.current.value,
                    password.current.value
                );

                navigate("/browse");

            }

        } catch (error) {

            setErrMessage(error.code + " " + error.message);

        }

    };

    return (
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141414] via-[#2b0c11] to-[#4a0e14]">

            <div className="absolute px-32 py-8 z-50 flex justify-between items-center w-full border-gray-500">

                <img
                    width="150px"
                    height="50px"
                    src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
                    alt="Netflix logo"
                />

            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleButtonClick();
                }}
                className="w-4/12 absolute p-12 bg-black/40 backdrop-blur-md top-1/2 -translate-y-1/2 mx-auto right-0 left-0 text-white"
            >

                <h1 className="font-extrabold text-3xl p-2 m-2">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {/* Full Name Input */}

                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Enter your Full Name"
                        ref={name}
                        className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80 focus:border-white focus:border-2 focus:outline-none p-2 m-2"
                    />
                )}

                {/* Email Input */}

                <input
                    type="email"
                    placeholder="Email Address"
                    ref={email}
                    className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80 focus:border-white focus:border-2 focus:outline-none p-2 m-2"
                />

                {/* Password Input */}

                <input
                    type="password"
                    placeholder="Password"
                    ref={password}
                    className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80 focus:border-white focus:border-2 focus:outline-none p-2 m-2"
                />

                {/* Error Message */}

                <p className="text-red-500 px-4 py-3 font-bold text-lg">
                    {errMessage}
                </p>

                {/* Sign In / Sign Up Button */}

                <button
                    type="submit"
                    className="flex items-center justify-center text-center rounded bg-[#e50914] px-6 py-3.5 text-xl font-medium text-white hover:bg-[#c11119] transition-colors w-full p-2 m-2"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                {/* Toggle Sign In / Sign Up */}

                <p
                    className="p-2 m-2 px-4 py-3.5 cursor-pointer hover:underline"
                    onClick={toggleSignInForm}
                >
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already a User? Sign In Now"}
                </p>

            </form>

        </div>
    );
};

export default LogInForm;
