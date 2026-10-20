
const LogInForm = () => {
    return (
        <div className = " absolute inset-0 -z-10  bg-gradient-to-t from-[#141414] via-[#2b0c11] to-[#4a0e14]">
            <div className="absolute px-32 py-8  z-50 flex justify-between items-center w-full border-gray-500">
                <img className="" width = "150px" height = "50px" src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"  alt="Netflix logo"/>
            </div>

            <form className="w-4/12 absolute p-12 bg-black/40 backdrop-blur-md my-36 mx-auto right-0 left-0 text-white ">
                <h1 className="font-extrabold tex-4xl p-2 m-2">Sign In</h1>
                <input type="email" placeholder ="Email Address" 
                className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80  focus:border-white focus:border-2 focus:outline-none p-2 m-2 ">
                </input>
                <input type="password" placeholder ="Password"
                className="w-full flex-1 rounded border border-gray-500 bg-black/25 px-4 py-3.5 text-white placeholder-white/80  focus:border-white focus:border-2 focus:outline-none p-2 m-2 ">
                </input>
                <button type="submit"
                className="flex items-center justify-center text-center rounded bg-[#e50914] px-6 py-3.5 text-xl font-medium text-white hover:bg-[#c11119] transition-colors w-full p-2 m-2">
                    Get Started 
                </button>
                <p className="p-2 m-2 px-4 py-3.5">New to Netflix? Sign Up Now</p>
            </form>
        </div>
    )
}

export default LogInForm;