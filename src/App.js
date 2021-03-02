import React, { useEffect, useState } from 'react';
import { searchByAbility, searchByName, chargeMainPage } from './store/actions';
import { connect } from 'react-redux';
import CardContainer from './container/cardContainer/CardContainer';
import DetailsContainer from './container/detailsContainer/DetailsContainer';
import Menu from './components/menu/Menu';
import {  Switch, Route, useHistory, withRouter } from 'react-router-dom';

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
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

	useEffect(() => {
		chargeMainPage();
	}, []);

	const submit = () => {
    handleClick()
    if(!term) return
    routeMiddleware(term)
		const type = {
      ability: searchByAbility,
			name: searchByName,
		};
		type[typeSearch](term);
	};

  const routeMiddleware = () => {



    // return history.pushState('/')

  }

	return (
		<>
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
		</>
	);
};

const App = withRouter(connect(mapStateToProps, mapStateToDispatch)(AppConnect));

export default App;
