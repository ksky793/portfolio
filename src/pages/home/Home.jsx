import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

const Home = () => {
	return (
		<div className='home-page'>
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
};

export default Home;
