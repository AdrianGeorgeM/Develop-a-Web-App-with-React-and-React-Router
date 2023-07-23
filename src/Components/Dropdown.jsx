import React, { useState } from 'react';
import arrowRight from '../Assets/arrowRight.svg';
import '../Styles/Dropdowns.css';

const Dropdown = ({ title, page, content }) => {
	const [open, setOpen] = useState(false);

	const toggleList = () => {
		setOpen(!open);
	};

	return (
		<div className='dropdown__item'>
			<div className={`dropdown__item--title ${page}`} onClick={toggleList}>
				<p>{title}</p>
				<img
					src={arrowRight}
					alt=''
					className={
						open === false ? 'dropdown__item--arrow-up' : 'dropdown__item--arrow-down'
					}
				/>
			</div>

			{Array.isArray(page) ? (
				<ul className={`dropdown-list ${open ? 'drop-open' : 'drop-close'}`}>
					{page.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			) : (
				<p className={`dropdown-list ${open ? 'drop-open' : 'drop-close'}`}>{content}</p>
			)}
		</div>
	);
};

export default Dropdown;
