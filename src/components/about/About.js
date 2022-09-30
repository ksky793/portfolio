import personIcon from '../../assets/images/aboutPersonIcon.png';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './About.css';

const About = () => {
	return (
		<section className='section-about-me' id='about'>
			<div data-aos='fade-up' className='wrapper about-info-container'>
				<div className='about-img-info-container'>
					<img
						className='about-img-person'
						src={personIcon}
						alt='Image Person'
					></img>
					<div className='about-headers-container about-active'>
						<h3 className='about-upper-header'>ABOUT</h3>
						<h2 className='about-lower-header'>About Me </h2>
					</div>
				</div>

				<div className='about-text-container'>
					<div className='about-headers-container about-inactive'>
						<h3 className='about-upper-header'>ABOUT</h3>
						<h2 className='about-lower-header'>About Me </h2>
					</div>
					<p className='about-text'>
						I'm a student of the Faculty of Computer Science at Bialystok
						University of Technology. My passion for programming began when |
						started my High School education and is continued until today.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
