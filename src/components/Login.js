import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile,} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setisSignInFron] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    seterrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign Up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            //-------------------------------------------itachi url-----------------------------------
            photoURL: NETFLIX_AVATAR,
          })
            .then(() => {
              const { uid, email, displayname, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayname: displayname,
                  photoURL: photoURL,
                })
              );
              //it will dispatch the action and update the user when user will going to signup
            })
            .catch((error) => {
              // An error occurred
              seterrorMessage(error.message);
            });
          // console.log(user);
          // navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //SignIN logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInFron(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-[.6] h-screen w-screen object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full    md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
      >
        <h1 className="text-white  py-4 text-[32px] font-[500]   ">
          {isSignInForm ? "Sign IN" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <div>
            <input 
              ref={name}
              type="text"
              placeholder="Full name"
              className="p-3 my-4 w-full bg-gray-600 rounded-sm"
            />
          </div>
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email or Phone Number"
          className="p-3 my-4 w-full bg-gray-600 rounded-sm"
        />

        <input
          ref={password}
          type="password"
          placeholder=" Password"
          className="p-3 my-4  bg-gray-600  w-full  rounded-sm"
        />
        <p className=" pt-3 text-rose-800 font-bold">{errorMessage}</p>

        <button
          className="p-3 my-4 bg-red-800 font-[600] w-full  rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "SignIn" : "SignUP"}
        </button>

        <p className="py-4  cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : " Already registred ? Sign IN Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
