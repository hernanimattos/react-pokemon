import {
	CHARGE_MAINPAGE,
	SEARCH_ABILITY,
	SEARCH_NAME_OR_ID,
} from './types';

const initState = {
	details: {},
	pokemons: [],
};

const reducers = (state = initState, action) => {
	const { type } = action;

	switch (type) {
		case SEARCH_NAME_OR_ID:
			return {
				...state,
				details: { ...action.payload },
			};

		case CHARGE_MAINPAGE:
			return {
				...state,
				pokemons: [...action.payload],
			};
		case SEARCH_ABILITY:
			return {
				...state,
				pokemons: [...action.payload],
			};

		default:
			state;
			break;
	}
	return state;
};

export default reducers;
