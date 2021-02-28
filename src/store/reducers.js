import { SEARCH } from "./types";

const initState = {
  data: {},
};

const reducers = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case SEARCH:
      return {
        ...state,
        data: { ...action.payload },
      };

    default:
      state;
      break;
  }
  return state;
};

export default reducers;
