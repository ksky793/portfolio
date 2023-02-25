import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer' id='footer'>
			<div className='footer__icons'>
				<a
					href='https://www.instagram.com/k_a_mc_io/'
					className='footer__icon-link'
				>
					<FaInstagram className='ic ic--small' />
				</a>
				<a
					href='https://www.linkedin.com/in/kamil-świętochowski-3ba9771b9/'
					className='footer__icon-link'
				>
					<FaLinkedin className=' ic ic--small' />
				</a>
				<a
					href='https://github.com/ksky793?tab=repositories'
					className='footer__icon-link'
				>
					<FaGithub className='ic ic--small' />
				</a>
			</div>
			<div className='footer__copyright m-t--10'>
				<span className='footer__copyright__icon'>©</span>
				<h5 className='footer__copyright__text'>2022 Kamil Świętochowski</h5>
			</div>
			<p className='footer__license m-t--10'>
				CC Attribution-NonCommercial 4.0 International
			</p>
		</footer>
	);
};

export default Footer;
