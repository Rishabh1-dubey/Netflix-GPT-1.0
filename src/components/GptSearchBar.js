import  {  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS, BARD_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const genAI = new GoogleGenerativeAI(BARD_KEY);

  const handleGptSerachClick = async () => {
    console.log(searchText.current.value);
    //make an api call to GPT API and get Movie Results
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 Movies , comma seperated like the example result given ahead. Example Result: Veeram, Mangatha, Jilla, Viswasam";
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = await response.text();
    const movies = text.split(",");
    const promise = movies.map((movie) => searchMovie(movie));
    const bardResults = await Promise.all(promise);
    dispatch(
      addGptMovieResult({ movieNames: movies, movieResults: bardResults })
    );
    console.log(result.response?.candidates[0]?.content?.parts);
  };

  return (
    <div className="pt-[35%] md:pt-[12%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid  grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-6 col-span-9"
          //gptSearchPlaceholder comes formo language Constant
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>

        <button
          className="col-span-3 m-6 py-4 px-4 mr-8 bg-red-500 text-white rounded-lg"
          onClick={handleGptSerachClick}
        >
          {lang[langKey].search}
          {/* why we write this because lang does not find lang key inside his component we thay why we did lang[langKey].search */}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
