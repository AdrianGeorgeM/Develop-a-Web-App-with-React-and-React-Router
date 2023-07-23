import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Thumbnail.css';

const Thumbnail = ({ id, cover, title }) => {
	return (
		<li className='thumb__apartment'>
			<Link to={`/apartment/${id}`} className='thumb__link'>
				<div className='thumb__container'>
					<img src={cover} alt='' className='thumb__image' />
					<div className='thumb__background'></div>
					<h2 className='thumb__title'>{title}</h2>
				</div>
			</Link>
		</li>
	);
};

export default Thumbnail;
