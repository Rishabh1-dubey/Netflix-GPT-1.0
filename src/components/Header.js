import  { useEffect } from "react";
import items from "../items/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {  useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        //ab error hanppend
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when components is unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black  z-50 flex justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={items} alt="Netflix logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <img
            className=" hidden md:block h-[45px] w-[46px]"
            src={user?.photoURL}
            alt="icon-logo"
          />
          <button className="text-white" onClick={handleSignout}>
            signOUt
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
