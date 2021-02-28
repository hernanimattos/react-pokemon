import { SET_TERM } from "./types";
import Http from "../provider/Http";
// http://pokeapi.co/api/v2/pokemon/{idPokemon}
const searchByName = async (name) => {
  // console.log(number);
  return await Http.get(name);
};

const searchByHability = async (term) => {
  // console.log(hability);
  const { data } = await Http.get(`pokemon`);

  return data;
};

const searchProxy = (type, term) => {
  return async (dispatch) => {
    const data = await searchByHability(term);

    dispatch({ type: SET_TERM, payload: data });
  };
};

export { searchProxy };
