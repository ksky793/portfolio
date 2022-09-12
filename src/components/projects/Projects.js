import './Projects.css';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import ViewAllButton from '../ui/buttons/viewAllButton/ViewAllButton';
import Project from './project/project/Project';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
	return (
		<section className='section-featured-projects'>
			<div className='wrapper featured-projects-container'>
				<div className='featured-projects-header-container'>
					<SectionHeaders upperText='PORTFOLIO' lowerText='Featured Projects' />
					<ViewAllButton />
				</div>
				{/* <div className='featured-projects-row'>
					{projects.map((project, index) => (
						<Project
							key={index}
							name={project.name}
							image={project.image}
							websiteUrl={project.websiteUrl}
							githubUrl={project.githubUrl}
						/>
					))}
				</div> */}
				{/* {projects.map((project, index) => (
						<Project
							key={index}
							name={project.name}
							image={project.image}
							websiteUrl={project.websiteUrl}
							githubUrl={project.githubUrl}
						/>
					))} */}
				<Project />
			</div>
		</section>
	);
};

export default Projects;
