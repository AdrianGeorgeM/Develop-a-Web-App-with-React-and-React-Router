import React from 'react';
import Banner from '../Components/Banner';
import Gallery from '../Pages/Gallery';
import '../Styles/Home.css';

const Home = () => {
	return (
		<main className='home'>
			<Banner />
			<Gallery />
		</main>
	);
};

export default Home;
