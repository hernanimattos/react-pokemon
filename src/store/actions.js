import axios from 'axios';
import {
    CHARGE_MAINPAGE,
    SEARCH_ABILITY,
    SEARCH_NAME_OR_ID,
    LOADING,
} from './types';
import Http from '../provider/Http';

const changePage = (url) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        const { data } = await axios.get(url);
        const { results, next, previous } = data;

        // eslint-disable-next-line no-undef
        const response = await Promise.all(
            results.map((result) => axios.get(result.url))
        );

        const newData = response.map((p) => p.data);
        dispatch({
            type: CHARGE_MAINPAGE,
            payload: newData,
            next,
            previous,
        });
    };
};

const chargeMainPage = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        const { data } = await Http.get('pokemon?limit=10');
        const { results, next, previous } = data;

        // eslint-disable-next-line no-undef
        const response = await Promise.all(
            results.map((result) => axios.get(result.url))
        );

        const newData = response.map((p) => p.data);
        dispatch({
            type: CHARGE_MAINPAGE,
            payload: newData,
            next,
            previous,
        });
    };
};

const searchByName = (nameOrId) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        const { data } = await Http.get(`pokemon/${nameOrId}`);
        dispatch({ type: SEARCH_NAME_OR_ID, payload: data });
    };
};

const searchByAbility = (ability) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        const { data } = await Http.get(`ability/${ability}`);
        const { pokemon } = data;

        // eslint-disable-next-line no-undef
        const response = await Promise.all(
            pokemon.map((result) => axios.get(result.pokemon.url))
        );

        const newData = response.map((p) => p.data);
        dispatch({
            type: SEARCH_ABILITY,
            payload: newData,
        });
    };
};

export { searchByAbility, chargeMainPage, searchByName, changePage };
