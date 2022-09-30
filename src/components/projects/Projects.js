import './Projects.css';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import ViewAllButton from '../ui/buttons/viewAllButton/ViewAllButton';
import Project from './project/project/Project';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
	return (
		<section className='section-featured-projects' id='projects'>
			<div data-aos='fade-up' className='wrapper featured-projects-container'>
				<div className='featured-projects-header-container'>
					<SectionHeaders upperText='PORTFOLIO' lowerText='Featured Projects' />
					<ViewAllButton />
				</div>
				<Project />
			</div>
		</section>
	);
};

export default Projects;
