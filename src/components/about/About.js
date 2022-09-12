import './About.css';
import personIcon from '../../assets/images/aboutPersonIcon.png';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
	return (
		<section className='section-about-me'>
			<div className='about-info-container'>
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
					<div className='about-icons about-inactive'>
						<MdEmail className='ic ic-email' />
						<FaGithub className='ic ic-github' />
						<FaLinkedin className='ic ic-linkedin' />
					</div>
				</div>

				<div className='about-text-container'>
					<div className='about-headers-container about-inactive'>
						<h3 className='about-upper-header'>ABOUT</h3>
						<h2 className='about-lower-header'>About Me </h2>
					</div>
					<p className='about-text'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
						pariatur dolore, obcaecati ex nesciunt accusamus perspiciatis
						provident ea. Dolor vero quo enim ab quibusdam fugiat, blanditiis
						sint amet excepturi minus?
					</p>
				</div>
				<div className='about-icons about-active'>
					<MdEmail className='ic ic-email' />
					<FaGithub className='ic ic-github' />
					<FaLinkedin className='ic ic-linkedin' />
				</div>
			</div>
		</section>
	);
};

export default About;
