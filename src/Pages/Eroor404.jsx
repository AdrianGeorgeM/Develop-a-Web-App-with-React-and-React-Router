import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ErrorPage.css';

const Eroor404 = () => {
	return (
		<div className='error-main'>
			<div className='error__title'>404</div>
			<div className='error-tagline'>Oops! It looks like this page doesn't exist.</div>
			<Link to='/' className='error__link'>
				Go back to home page
			</Link>
		</div>
	);
};

export default Eroor404;
