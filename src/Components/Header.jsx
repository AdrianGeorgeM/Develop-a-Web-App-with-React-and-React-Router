import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';
import header_logo from '../Assets/header_logo.svg';

const Header = () => {
	return (
		<header>
			<img src={header_logo} className='header__logo' alt='Logo' />
			<nav>
				<ul className='navbar__list'>
					<li className='navbar__list-item'>
						<NavLink
							exact
							activeClassName='navbar__link--active'
							className='navbar__link'
							to='/'
						>
							Home
						</NavLink>
					</li>
					<li className='navbar__list-item'>
						<NavLink
							exact
							activeClassName='navbar__link navbar__link--active'
							className='navbar__link'
							to='/about'
						>
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
