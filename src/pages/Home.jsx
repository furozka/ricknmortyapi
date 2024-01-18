import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCharacters } from "../redux/characters/charactersSlice";
import {
  getAsyncAllCharacters,
  loadMoreAsyncCharacters,
} from "../redux/characters/charactersService";
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const error = useSelector((state)=>state.ricknmorty.error)
  const characters = useSelector(selectCharacters);
  const [startValue, setStartValue] = useState(21);
  const status = useSelector((state)=>state.ricknmorty.status)
  const dispatch = useDispatch();
  const handleClick = () => {
    const newArray = [];
    for (let i = startValue; i < startValue + 20; i++) {
      newArray.push(i);
    }
    dispatch(loadMoreAsyncCharacters(newArray));
    setStartValue(startValue + 20);
  };

  useEffect(() => {
    if(status==="idle"){
    dispatch(getAsyncAllCharacters());
  }
  }, [dispatch, status]);

  if(status==="pending"){
    return <Loading/>
  }
  if(status==="failed"){
    return <Error message={error}/>
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
      <div className="flex justify-center m-5">
        <button
          className="bg-slate-800 h-10 w-auto rounded-lg text-white p-5 flex items-center"
          onClick={handleClick}
        >
          Load More
        </button>

      </div>
    </div>
  );
};

export default Home;
