import axios from "axios";
import { SEARCH , CHARGE_MAINPAGE} from "./types";
import Http from "../provider/Http";


const chargeMainPage = () => {

  return async  (dispatch) => {
    const { data } = await Http.get("pokemon?limit=20&search=true");
    const { results } = data;

    const response = await Promise.all(results.map((result) => axios.get(result.url)))

    const newData = response.map((p) => p.data)
    dispatch( {
      type: CHARGE_MAINPAGE,
      payload: newData
    })
  }
}

const searchByName = async (nameOrId) => {
  const { data } = await Http.get(`pokemon/${nameOrId}`);

  return data;
};

const searchByAbility = async (ability) => {
  const { data } = await Http.get(`ability/${ability}`);

  return data;
};

const searchProxy = (type, term) => {

  return async (dispatch) => {
    const typeSearch = {
      ability: searchByAbility,
      name: searchByName,
    };
    const data = await typeSearch[type](term);

    dispatch({ type: SEARCH, payload: data });
  };
};

export { searchProxy, chargeMainPage };
