import Header from './Header'
const Login = () => {
    return(
        <div className="realtive h-screen w-screen overflow-hidden">

            <div className="absolute top-0 left-0 w-full">
                <Header/>
            </div>

            <div className='absolute inset-0 -z-10'>
                <img className="h-full w-full object-cover"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg" alt ="Background poster wall"/>
            </div>

            <div className="absolute inset-0 -z-10 bg-black/50 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>

            <div className="realtive z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl md:text-6xl">Unlimited movies , shows, and more</h1>
                <p className="mt-4 text-lg font-bold sm:text-xl">Starts at ₹149. Cancel at any time.</p>
                <p className="mt-6 text-base font-medium sm:text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
                <form onSubmit ={(e) => e.preventDefault() } className ="mt-4 flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2">
                <input type="email" placeholder ="Email Address" 
                className="w-full flex-1 rounded border border-gray-500 bg-black/60 px-4 py-3.5 text-black placeholder-gray-400 backdrop-blur-xsm  focus:border-white focus:border-2 focus:outline-none">
                </input>
                <button type="submit"
                className="flex items-center gap-2 rounded bg-[#e50914] px-6 py-3.5 text-xl font-medium text-white hover:bg-[#c11119] transition-colors">
                    Get Started 
                </button>
                <svg className="h-5 w-5" fill ="none" stroke ="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap= "round" strokeLinejoin="round" strokeWidth={2} d= "M9 5l7 7-7 7" />
                </svg>
                </form>
            </div>

            

        </div>
    )
}

export default Login;