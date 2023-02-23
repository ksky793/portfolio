import { FaFacebookMessenger } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Card from '../card/Card';
import Input from '../input/Input';
import './Contact.scss';
import { validate, isFormValid } from '../../helpers/validation';
import SpinningButton from '../ui/buttons/spinningButton/SpinningButton';
const initialState = {
	fullName: {
		value: '',
		showError: false,
		error: '',
		valid: false,
		rules: ['required'],
	},
	email: {
		value: '',
		showError: false,
		error: '',
		valid: false,
		rules: ['required', 'email'],
	},
	textArea: {
		value: '',
		showError: false,
		error: '',
		valid: false,
		rules: ['required', { rule: 'min', length: 25 }],
	},
};

const Contact = () => {
	const [error, setError] = useState({
		valid: null,
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		fullName: {
			value: '',
			showError: false,
			error: '',
			valid: false,
			rules: ['required'],
		},
		email: {
			value: '',
			showError: false,
			error: '',
			valid: false,
			rules: ['required', 'email'],
		},
		textArea: {
			value: '',
			showError: false,
			error: '',
			valid: false,
			rules: ['required', { rule: 'min', length: 25 }],
		},
	});

	const changeHandler = (value, fieldName) => {
		const error = validate(form[fieldName].rules, value);
		setForm({
			...form,
			[fieldName]: {
				...form[fieldName],
				error: error,
				showError: error ? true : false,
				valid: error ? false : true,
				value: value,
			},
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const isValid = isFormValid(form);
		if (isValid) {
			try {
				await emailjs.sendForm(
					'service_yl4083v',
					'template_s4hqntk',
					e.target,
					'2SvR_tELXukcGqByS'
				);
				setLoading(false);
				setForm(initialState);
			} catch (err) {
				setError({
					valid: false,
					message: err.message,
				});
				setLoading(false);
			}
		} else {
			setError({ message: 'Fill in all fields correctly', valid: false });
			setLoading(false);
		}
	};

	return (
		<section className='contact' id='contact'>
			<div data-aos='fade-up' className='wrapper contact__container'>
				<SectionHeaders upperText='GET IN TOUCH' lowerText='Contact Me' />
				<div className='contact__container__bottom'>
					<div className='contact__container__bottom__infos'>
						<Card modifier='contact'>
							<MdEmail className='ic ic--big m-b--20' />
							<h3 className='card__header card__header--size-contact'>Email</h3>
							<h4 className='card__header card__header--services'>
								kamil.swietochowsky@gmail.com
							</h4>
							<a
								href='mailto:kamil.swietochowsky@gmail.com'
								className='card__href card__href--color-href'
							>
								Send a message
							</a>
						</Card>
						<Card modifier='contact'>
							<FaFacebookMessenger className='ic ic--big m-b--20' />
							<h3 className='card__header card__header--size-contact'>
								Messenger
							</h3>
							<h4 className='card__header card__header--services'>
								Kamil Świętochowski
							</h4>
							<a
								href='https://m.me/Kamcioooo'
								className='card__href card__href--color-href'
							>
								Send a message
							</a>
						</Card>
					</div>

					<div className='contact__container__bottom__form'>
						<form className='form' onSubmit={handleSubmit}>
							<Input
								type='text'
								name='name'
								placeholder='Your Full Name'
								value={form.fullName.value}
								onChange={(e) => changeHandler(e.target.value, 'fullName')}
								showError={form.fullName.showError}
								error={form.fullName.error}
							/>
							<Input
								type='email'
								name='email'
								placeholder='Your Email'
								value={form.email.value}
								onChange={(e) => changeHandler(e.target.value, 'email')}
								showError={form.email.showError}
								error={form.email.error}
							/>
							<Input
								type='textarea'
								name='message'
								placeholder='Your Message'
								value={form.textArea.value}
								onChange={(e) => changeHandler(e.target.value, 'textArea')}
								showError={form.textArea.showError}
								error={form.textArea.error}
							/>
							<SpinningButton loading={loading}>Send a Message</SpinningButton>
						</form>
						{!error.valid && (
							<p className='invalid-feedback'>{error.message}</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
