import './Projects.css';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import Project from './project/project/Project';

const Projects = () => {
	return (
		<section className='section-featured-projects' id='projects'>
			<div data-aos='fade-up' className='wrapper featured-projects-container'>
				<div className='featured-projects-header-container'>
					<SectionHeaders upperText='PORTFOLIO' lowerText='My Projects' />
				</div>
				<Project />
			</div>
		</section>
	);
};

export default Projects;
