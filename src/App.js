import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

import './App.css';
import About from './components/about/About';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className='App'>
			{/* <Navbar /> */}
			<Header />
			<About />
			<Services />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
export default App;
