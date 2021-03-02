import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchByName } from '../../store/actions';

import { useParams } from 'react-router-dom';
import Card from '../../components/card/Card';

const mapStateToProps = (state) => {
	return {
		details: state.details,
	};
};

const mapStateToDispatch = (dispatch) => {
	return {
		searchProxy: (type, id) => dispatch(searchByName(id)),
	};
};

const DetailsContainerConnect = ({ searchProxy, details }) => {
	let { id } = useParams();

	useEffect(() => {
		searchProxy('name', id);
	}, [id]);

	console.log(id);
	return (
		<div className="container">
			<Card {...details} />
		</div>
	);
};

const DetailsContainer = connect(
	mapStateToProps,
	mapStateToDispatch,
)(DetailsContainerConnect);

export default DetailsContainer;
