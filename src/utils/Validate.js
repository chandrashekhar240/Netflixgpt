export const Validata =(email,password) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    //const isPhoneNumValid = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{4,10}$/.test(phoneNum);


    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    //if(!isPhoneNumValid) return "phoneNumisValid";

    return null;
}

;


//