import personIcon from '../../assets/images/headerIllustration.jpg';
import './About.scss';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import { useEffect, useState } from 'react';
const About = () => {
	const [widthSize, setWidthSize] = useState(window.innerWidth);

	const handleWindowSizeChange = () => {
		setWidthSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const isMobile = widthSize < 768;
	return (
		<section className='about' id='about'>
			<div className='about__illustration'></div>
			<div className='about__container'>
				<div className='about__container__text m-t--40'>
					<SectionHeaders
						upperText='ABOUT'
						lowerText='About Me'
						textAllign={isMobile ? 'center' : 'left'}
					/>
					<p className='about__container__text__description'>
						I am a student at the last semester of Computer Science at the
						Faculty of Computer Science at Bialystok University of Technology. I
						have experience in creating websites using HTML, CSS, Javascript. I
						have a strong interest in React and have experience building web
						applications using this framework. What I like the most in React is
						creating reusable components. It makes my app easier to develop by
						making more readable code. I’m looking forward to gain my first
						commercial experience and i’m very curious to see what it’s like to
						work in a real project.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
