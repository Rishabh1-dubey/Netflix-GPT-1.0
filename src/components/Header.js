import { useEffect } from "react";
import items from "../items/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toggleSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // const langKey = useSelector((store) => store.config.lang);
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
          })) 
          if (window.location.pathname === "/") {
            navigate("/browser");
          }
        
      
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when components is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //dispatch an action togglegptserach view
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black  z-50 flex justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={items} alt="Netflix logo" />
      {user && (
        <div className="flex p-2 justify-between">
          
          {showGptSearch && (
            <select
              className="  p-2 m-2 bg-gray-700 text-white rounded-lg "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="pt-5"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4  my-2 cursor-pointer text-white bg-yellow-500 rounded-md"
            onClick={handleGptSearchClick}
          >
            {/* Search Gpt */}
            {showGptSearch ? "Home Page" : "Search GPT"}
          </button>

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
