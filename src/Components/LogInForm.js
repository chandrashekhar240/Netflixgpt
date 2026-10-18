
const LogInForm = () => {
    return (
        <div className = "bg-gradient-to-b from-red-600 size-full">
            <form>
                <input type = "text" placeholder = "Email or phone number" />
                <input type = "password" placeholder = "Password" />
                <button type = "submit">Sign In</button>
            </form>
        </div>
    )
}

export default LogInForm;