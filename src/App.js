import React, { useEffect, useState } from 'react';
import { searchByAbility, searchByName, chargeMainPage } from './store/actions';
import { connect } from 'react-redux';
import CardContainer from './container/CardContainer';
import DetailsContainer from './container/DetailsContainer';
import Menu from './components/menu/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

const mapStateToDispatch = (dispatch) => {
	return {
		searchByAbility: (term) => dispatch(searchByAbility(term)),
		chargeMainPage: () => dispatch(chargeMainPage()),
		searchByName: (term) => dispatch(searchByName(term)),
	};
};

const mapStateToProps = (state) => {
	return {
		pokemons: state.data,
	};
};

const AppConnect = ({ chargeMainPage, searchByAbility, searchByName }) => {
	const [term, setTerm] = useState('');
	const [typeSearch, setTypeSearch] = useState('name');

	useEffect(() => {
		chargeMainPage();
	}, []);

	const submit = () => {
    if(!term) return
		const type = {
      ability: searchByAbility,
			name: searchByName,
		};
		type[typeSearch](term);
	};

	return (
		<BrowserRouter>
			<Menu
				getTerm={(e) => setTerm(e.target.value)}
				submit={() => submit()}
				getTypeSearch={(e) => setTypeSearch(e.target.value)}
				type={typeSearch}
			/>

			<Switch>
				<Route path="/" exact>
					<CardContainer />
				</Route>
				<Route path="/:id" exact>
					<DetailsContainer />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

const App = connect(mapStateToProps, mapStateToDispatch)(AppConnect);

export default App;
