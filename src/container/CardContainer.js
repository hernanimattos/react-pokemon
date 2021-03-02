import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/card/Card';
import MainContainer from './MainContainer';
import Pagination from "../container/Pagination";

const mapStateToProps = (state) => {

  console.log(state)
	return {
		pokemons: state.pokemons,
    details: state.details,
	};
};

const CardContainerConect = ({ details, pokemons}) => {
	return (
		<MainContainer>
			{pokemons  ? (
				pokemons.map((props) => (
					<Card {...props} key={props.name}  />
				))
			) : (
				<Card {...details}  />
			)}
      <Pagination/>
		</MainContainer>
	);
};
const CardContainer = connect(mapStateToProps)(CardContainerConect);

export default CardContainer;
