import React from 'react';
import footer_logo from '../Assets/footer_logo.svg';
import '../Styles/FooterPage.css';

const Footer = () => {
	return (
		<div className='footer'>
			<img src={footer_logo} alt='Footer Logo' className='footer__logo' />
			<p className='footer__text'>© 2020 Kasa. All rights reserved.</p>
		</div>
	);
};

export default Footer;
