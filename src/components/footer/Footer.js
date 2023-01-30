import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import './Footer.css';
const Footer = () => {
	return (
		<footer className='footer' id='footer'>
			<div className='footer-icons-container'>
				<a href='https://www.instagram.com/k_a_mc_io/'>
					<FaInstagram className='ic ic-instagram' />
				</a>
				<a href='https://www.linkedin.com/in/kamil-świętochowski-3ba9771b9/'>
					<FaLinkedin className='ic ic-linkedin' />
				</a>
				<a href='https://github.com/ksky793?tab=repositories'>
					<FaGithub className='ic ic-github' />
				</a>
			</div>
			<div className='footer-copyright-container'>
				<AiOutlineCopyrightCircle className='ic ic-copyright' />
				<h5>2022 Kamil Świętochowski</h5>
			</div>
			<p className='license'>CC Attribution-NonCommercial 4.0 International</p>
		</footer>
	);
};

export default Footer;
