import React from 'react';
import Thumbnail from '../Components/Thumbnail';
import data from '../Assets/data.json';
import '../Styles/Gallery.css';

const Gallery = () => {
	return (
		<main>
			<section className='gallery'>
				{data.map((item, index) => (
					<Thumbnail key={index} {...item} />
				))}
			</section>
		</main>
	);
};

export default Gallery;
