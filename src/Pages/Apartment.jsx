import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Assets/data.json';
import GallerySlider from './GallerySlider';
import '../Styles/Apartment_Info.css';
import '../Styles/Tags.css';
import star_blank from '../Assets/star_blank.svg';
import star_filled from '../Assets/star_filled.svg';
import Dropdown from '../Components/Dropdown';

const Apartment = () => {
	const { id } = useParams();
	const apartment = useMemo(() => data.find((datas) => datas.id === id), [id]);

	if (!apartment) {
		// Render a not found message or redirect to a 404 page
		return <div>Apartment not found</div>;
	}

	const range = Array(5).fill(null);

	return (
		<div className='apartment'>
			<GallerySlider apartment={apartment} />

			<main>
				<div className='info'>
					<div className='info__header'>
						<h1 className='info__header--title'>{apartment.title}</h1>
						<p className='info__header--location'>{apartment.location}</p>
						<div className='intro__header--tags'>
							{apartment.tags.map((tag, index) => (
								<span className='tag' key={index}>
									{tag}
								</span>
							))}
						</div>
					</div>
					<div className='info__profile'>
						<div className='info__host'>
							<p className='info__host--name'>{apartment.host.name}</p>
							<div className='info__host--picture'>
								<img src={apartment.host.picture} alt='Host'></img>
							</div>
						</div>
						<div className='info__rating'>
							{range.map((_, index) => (
								<img
									src={index < apartment.rating ? star_filled : star_blank}
									alt='Star'
									className='star'
									key={index}
								></img>
							))}
						</div>
					</div>
				</div>
				<div className='collapse'>
					<Dropdown title='Description' content={apartment.description} />
					<Dropdown title='Equipements' content={apartment.Amenities} />
				</div>
			</main>
		</div>
	);
};

export default Apartment;
