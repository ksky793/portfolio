import './Projects.scss';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import ImageSlider from '../imageSlider/ImageSlider';

// images
import portfolio from '../../assets/images/portfolio.png';
import ecommerce from '../../assets/images/ecommerce.png';
import netflix from '../../assets/images/netflix.png';
import hotels from '../../assets/images/hotels.png';
import notatnik from '../../assets/images/notatnik.png';

const projects = [
	{
		name: 'Portfolio',
		image: portfolio,
		websiteUrl: 'https://portfolio-e13cf.web.app',
		githubUrl: 'https://github.com/ksky793/portfolio',
	},
	{
		name: 'Ecommerce (in progress)',
		image: ecommerce,
		websiteUrl: 'https://github.com/ksky793/ecommerce-react-redux-firebase',
		githubUrl: 'https://github.com/ksky793/ecommerce-react-redux-firebase',
	},
	{
		name: 'Hotels',
		image: hotels,
		websiteUrl: 'https://noclegi-5b7a2.web.app',
		githubUrl: 'https://github.com/ksky793/noclegi-app',
	},
	{
		name: 'Netflix Clone',
		image: netflix,
		websiteUrl: 'https://netflix-clone-62010.web.app',
		githubUrl: 'https://github.com/ksky793/netflix',
	},
	{
		name: 'CRUD Notes',
		image: notatnik,
		websiteUrl: 'https://notes-ef74d.web.app',
		githubUrl: 'https://github.com/ksky793/notatnik',
	},
];
const Projects = () => {
	return (
		<section className='portfolio' id='portfolio'>
			<div className='wrapper portfolio__container'>
				<div className='portfolio__header'>
					<SectionHeaders upperText='PORTFOLIO' lowerText='My Projects' />
				</div>
				<div className='portfolio__slider'>
					<ImageSlider slides={projects} />
				</div>
			</div>
		</section>
	);
};

export default Projects;
