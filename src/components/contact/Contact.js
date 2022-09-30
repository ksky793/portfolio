import { FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
const Contact = () => {
	const form = useRef();
	const [sent, setSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_yl4083v',
				'template_s4hqntk',
				form.current,
				'2SvR_tELXukcGqByS'
			)
			.then(
				(result) => {
					setSent(true);
				},
				(error) => {
					setSent(false);
				}
			);
		e.target.reset();
	};

	return (
		<section className='section-contact-me' id='contact'>
			<div data-aos='fade-up' className='wrapper contact-container'>
				<SectionHeaders upperText='GET IN TOUCH' lowerText='Contact Me' />
				<div className='contact-bottom-container'>
					<div className='contact-left-side'>
						<div className='contact-icons-container'>
							<article className='contact-element'>
								<MdEmail className='ic ic-mail' />
								<h3>Email</h3>
								<h4>kamil.swietochowsky@gmail.com</h4>
								<a href='mailto:kamil.swietochowsky@gmail.com'>
									Send a message
								</a>
							</article>
							<article className='contact-element'>
								<FaFacebookMessenger className='ic ic-messenger' />
								<h3>Messenger</h3>
								<h4>Kamil Świętochowski</h4>
								<a href='https://m.me/Kamcioooo' target='_blank'>
									Send a message
								</a>
							</article>
							{/* <article className='contact-element'>
								<FaInstagram className='ic ic-instagram' />
								<h3>Instagram</h3>
								<h4>k_a_mc_io</h4>
								<a href='https://www.instagram.com/k_a_mc_io/' target='_blank'>
									Send a message
								</a>
							</article> */}
						</div>
					</div>
					<div className='contact-right-side'>
						<form className='contact-form' ref={form} onSubmit={sendEmail}>
							<input
								type='text'
								name='name'
								placeholder='Your Full Name'
								required
							/>
							<input
								type='email'
								name='email'
								placeholder='Your Email'
								required
							/>
							<textarea
								name='message'
								rows='7'
								placeholder='Your Message'
								required
							></textarea>
							<button type='submit' className='btns btn-submit'>
								Send Message
							</button>
							{sent === true && (
								<p style={{ color: 'white', marginBottom: '0px' }}>
									Message is sent
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
