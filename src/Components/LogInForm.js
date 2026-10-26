import {useRef, useState} from "react"
import {Validata} from "../utils/Validate"
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";
import{auth} from "../utils/Firebase"
import {useNavigate} from "react-router-dom";

const LogInForm = () => {

    const navigate = useNavigate();

    const[isSignInForm , setSignInForm] = useState(true);
    const toggleSignInForm =() => {
        setSignInForm(!isSignInForm)
    }

    const email = useRef(null);
    const password = useRef(null);
   // const phoneNum = useRef(null);

    const[errMessage , setErrMessage] = useState(null);
    const handleButtonClick = () => {
        const msg = Validata(email.current.value , password.current.value ); 
        setErrMessage(msg);
        if(msg) return;

        // SignIn / SignUp Logic

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
  })
  .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMessage(errorCode+" "+errorMessage);
         })
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
    // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
    // ...
  })
                .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " "+ errorMessage);
  });
        }
    }
    return (
        <div className = " absolute inset-0 -z-10  bg-gradient-to-t from-[#141414] via-[#2b0c11] to-[#4a0e14]">
            <div className="absolute px-32 py-8  z-50 flex justify-between items-center w-full border-gray-500">
                <img className="" width = "150px" height = "50px" src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"  alt="Netflix logo"/>
            </div>

            <form onSubmit ={(e) => e.preventDefault()} className="w-4/12  absolute p-12 bg-black/40 backdrop-blur-md top-1/2 -translate-y-1/2 mx-auto right-0 left-0 text-white ">
                <h1 className="font-extrabold text-3xl p-2 m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm && (
                    <input type="Name" placeholder ="Enter your Full Name" //ref={phoneNum}
                className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80  focus:border-white focus:border-2 focus:outline-none p-2 m-2 ">
                </input>)
                }
                <input type="email" placeholder ="Email Address" ref={email}
                className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80  focus:border-white focus:border-2 focus:outline-none p-2 m-2 ">
                </input>
                <input type="password" placeholder ="Password" ref={password}
                className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80  focus:border-white focus:border-2 focus:outline-none p-2 m-2 ">
                </input>
               <p className="text-red-500 px-4 py-3 font-bold text-lg">{errMessage}</p>
                <button type="submit"
                className="flex items-center justify-center text-center rounded bg-[#e50914] px-6 py-3.5 text-xl font-medium text-white hover:bg-[#c11119] transition-colors w-full p-2 m-2" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"} 
                </button>
                <p className="p-2 m-2 px-4 py-3.5 cursor-pointer hover:underline" onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix? Sign Up Now" : "already a User? Sign in Now"}</p>
            </form>
        </div>
    )
}

export default LogInForm;