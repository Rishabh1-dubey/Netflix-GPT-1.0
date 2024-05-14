import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants"

const GptSearchBar = () => {

  const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className="pt-[35%] md:pt-[12%] flex justify-center">
      <form className=" w-full md:w-1/2 bg-black grid  grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-6 col-span-9"
          //gptSearchPlaceholder comes formo language Constant
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 m-6 py-4 px-4 mr-8 bg-red-500 text-white rounded-lg">
          {lang[langKey].search}
          {/* why we write this because lang does not find lang key inside his component we thay why we did lang[langKey].search */}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
