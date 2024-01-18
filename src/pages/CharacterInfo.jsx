import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectTargetCharacter } from "../redux/characters/charactersSlice";
import { getAsyncTargetCharacter } from "../redux/characters/charactersService";

const CharacterInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const targetCharacter = useSelector(selectTargetCharacter);
  useEffect(() => {
    dispatch(getAsyncTargetCharacter(Number(params.id)));
  }, [params,dispatch]);

  //   console.log("target character:", targetCharacter)
  return (
    <div className="flex flex-col items-center">
      <p className="text-6xl mb-3">{targetCharacter.name}</p>

      <div className="bg-slate-600 flex">
        <Link
          className="flex justify-center items-center text-9xl"
          to={`/character/${Number(params.id) - 1<=0 ? 1 : Number(params.id) - 1}`}
        >
          {"<"}
        </Link>

        <img style={{ width: "500px" }} src={targetCharacter.image} alt="img" />

        <Link
          className="flex justify-center items-center text-9xl"
          to={`/character/${Number(params.id) + 1}`}
        >
          {">"}
        </Link>
      </div>
    </div>
  );
};

export default CharacterInfo;
