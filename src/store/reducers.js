import {
	CHARGE_MAINPAGE,
	SEARCH_ABILITY,
	SEARCH_NAME_OR_ID,
} from './types';

const initState = {
	details: {},
	pokemons: [],
  showList:true
};

const reducers = (state = initState, action) => {
	const { type } = action;

	switch (type) {
		case SEARCH_NAME_OR_ID:
			return {
				...state,
        showList: false,
				details: { ...action.payload },
			};
		case CHARGE_MAINPAGE:
			return {
				...state,
        showList: true,
				pokemons: [...action.payload],
        next: action.next,
        previous: action.previous
			};
		case SEARCH_ABILITY:
			return {
				...state,
        showList: true,
				pokemons: [...action.payload],
        next: action.next,
        previous: action.previous
			};

		default:
			state;
			break;
	}
	return state;
};

export default reducers;
