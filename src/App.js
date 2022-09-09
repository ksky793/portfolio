import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

import './App.css';
import About from './components/about/About';
import Services from './components/services/Services';

function App() {
	return (
		<div className='App'>
			{/* <Navbar /> */}
			<Header />
			<About />
			<Services />
		</div>
	);
}
export default App;
