import React from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './Styles/App.css';
import Apartment from './Pages/Apartment';
import Footer from './Components/Footer';
import Error404 from './Pages/Eroor404';

function App() {
	return (
		<div className='container'>
			<Router>
				<Header />
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<Route exact path='/apartment/:id' component={Apartment} />
						<Route path='*' element={<Error404 />} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
