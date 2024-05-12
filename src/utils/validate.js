export const checkValidData=(email,password)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    
//   ye jbhi kr rha to value undefined dikha rha tha to fullname.current.value remove kiya then 
// krne ke baad authticationi wla show kr rha haii
    if(!isEmailValid) return "Bhai Dhang se E-mail daal";
    if(!isPasswordValid) return "Bhai kya kr rha hai ?";
    
    return null;
}