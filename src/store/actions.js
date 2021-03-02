import axios from 'axios';
import { SEARCH, CHARGE_MAINPAGE, SEARCH_ABILITY, SEARCH_NAME_OR_ID } from './types';
import Http from '../provider/Http';

const chargeMainPage = () => {
	return async (dispatch) => {
		const { data } = await Http.get('pokemon?limit=20&search=true');
		const { results } = data;

		// eslint-disable-next-line no-undef
		const response = await Promise.all(
			results.map((result) => axios.get(result.url)),
		);

		const newData = response.map((p) => p.data);
		dispatch({
			type: CHARGE_MAINPAGE,
			payload: newData,
		});
	};
};

const searchByName = (nameOrId) => {
	return async (dispatch) => {
		const { data } = await Http.get(`pokemon/${nameOrId}`);
		dispatch({ type: SEARCH_NAME_OR_ID, payload: data });
	};
};

const searchByAbility = (ability) => {
	return async (dispatch) => {
		const { data } = await Http.get(`ability/${ability}`);

    console.log(data, " j")
		const { pokemon } = data;

    console.log(pokemon, " --")

		// eslint-disable-next-line no-undef
		const response = await Promise.all(
			pokemon.map((result) => axios.get(result.pokemon.url)),
		);

    console.log(response, "---")
		const newData = response.map((p) => p.data);

		dispatch({ type: SEARCH_ABILITY, payload: newData });
	};
};

export { searchByAbility, chargeMainPage, searchByName };
