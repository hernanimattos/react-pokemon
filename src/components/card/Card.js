import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, name, sprites} ) => {
	const { other = {} } = sprites || {};
	const { dream_world = {} } = other;
	const { front_default } = dream_world;

	return (
		<Link to={`/${id}`} className="card">
			<article className="card-inner">
				<div className="card-front">
					<img src={front_default} alt="name" />
				</div>
				<div className="card-back">
					<footer>{name}</footer>
				</div>
			</article>
		</Link>
	);
};

export default Card;
