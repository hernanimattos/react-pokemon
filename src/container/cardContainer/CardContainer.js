import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/card/Card';
import MainContainer from '../MainContainer';
import Pagination from "../pagination/Pagination";

const mapStateToProps = (state) => {

	return {
		pokemons: state.pokemons,
    details: state.details,
    showList: state.showList,
	};
};

const CardContainerConect = ({ details, pokemons, showList}) => {
	return (
    <div className="container">
		<MainContainer>
			{pokemons  && showList ? (
				pokemons.map((props) => (
					<Card {...props} key={props.name}  />
				))
			) : (
				<Card {...details}  />
			)}

		</MainContainer>
    {showList && <Pagination/>}
    </div>
	);
};
const CardContainer = connect(mapStateToProps)(CardContainerConect);

export default CardContainer;
