import { SEARCH, CHARGE_MAINPAGE } from "./types";

const initState = {
  data: [],
  pokemons:[]
};

const reducers = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case SEARCH:
      return {
        ...state,
        data: { ...action.payload },
      };

      case CHARGE_MAINPAGE:
        return {
          ...state,
          pokemons: [ ...action.payload ],
        }

    default:
      state;
      break;
  }
  return state;
};

export default reducers;
