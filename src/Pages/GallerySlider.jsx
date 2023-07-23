import React, { useState } from 'react';
import arrowLeft from '../Assets/arrowLeft.svg';
import arrowRight from '../Assets/arrowRight.svg';
import '../Assets/data.json';
import '../Styles/GallerySlider.css';

const Gallery_Slider = ({ apartment }) => {
	const [currentPicture, setCurrentPicture] = useState(0);
	const pictures = apartment.pictures;
	const imagesLength = pictures.length;

	const nextPicture = () => {
		setCurrentPicture(currentPicture === pictures.length - 1 ? 0 : currentPicture + 1);
	};

	const prevPicture = () => {
		setCurrentPicture(currentPicture === 0 ? pictures.length - 1 : currentPicture - 1);
	};

	return (
		<div className='gallery__slider'>
			<img
				src={arrowLeft}
				alt='arrowLeft'
				className={imagesLength === 1 ? 'inactiveState' : 'arrow-left'}
				onClick={prevPicture}
			></img>
			<img
				src={arrowRight}
				alt='arrowRight'
				className={imagesLength === 1 ? 'inactiveState' : 'arrow-right'}
				onClick={nextPicture}
			></img>

			{pictures.map((photos, index) => (
				<div
					className={currentPicture === index ? 'activeState' : 'inactiveState'}
					key={index}
				>
					<img src={photos} alt='Apartment' className='gallery__image' />
				</div>
			))}
		</div>
	);
};

export default Gallery_Slider;
