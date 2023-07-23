import React from 'react';
import Thumbnail from '../Components/Thumbnail';
import data from '../Assets/data.json';
import '../Styles/Gallery.css';

const Gallery = () => {
	return (
		<main>
			<ul className='gallery__main'>
				{data.map((datas, index) => (
					<Thumbnail title={datas.title} cover={datas.cover} id={datas.id} key={index} />
				))}
			</ul>
		</main>
	);
};

export default Gallery;
