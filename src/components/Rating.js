import React from 'react';
import Icon from './Icon';

import '../styles/Rating.css';

const Rating = ({ stars }) => {
	let rating = [];

	for (let i = 0; i < stars; i++) {
		rating.push(<Icon key={i} name="star" />);
	}

	for (let i = stars; i < 5; i++) {
		rating.push(<Icon key={i} name="star-o" />);
	}

	return (
		<div className="rating">
			{rating}
		</div>
	);
};

export default Rating;