import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Thumbnail.css';

const Thumbnail = ({ id, cover, title }) => {
	return (
		<Link to={`/apartment/${id}`} className='card'>
			<div className='card-image' style={{ backgroundImage: `url(${cover})` }}>
				<div className='card-title'>{title}</div>
				<button className='favorite-button'>♥</button>
			</div>
		</Link>
	);
};

export default Thumbnail;
