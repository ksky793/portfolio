import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import './Footer.css';
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-icons-container'>
				<FaInstagram className='ic ic-instagram' />
				<FaLinkedin className='ic ic-linkedin' />
				<FaGithub className='ic ic-github' />
			</div>
			<div className='footer-copyright-container'>
				<AiOutlineCopyrightCircle className='ic ic-copyright' />
				<h5>2022 Kamil Świętochowski</h5>
			</div>
		</footer>
	);
};

export default Footer;
