import { AiOutlineArrowRight } from 'react-icons/ai';
import netflix from '../../../../assets/images/netflix.png';
import portfolio from '../../../../assets/images/portfolio.png';
import notatnik from '../../../../assets/images/notatnik.png';
import './Project.css';
import Carousel from 'react-bootstrap/Carousel';
const Project = () => {
	const projects = [
		{
			name: 'Portfolio',
			image: portfolio,
			websiteUrl: 'https://portfolio-e13cf.web.app',
			githubUrl: 'https://github.com/ksky793/portfolio',
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
	return (
		<Carousel>
			{projects.map((project, index) => (
				<Carousel.Item interval={3000} key={index}>
					<div className='featured-project-container'>
						<div
							className='featured-project-image'
							style={{ backgroundImage: `url(${project.image})` }}
						></div>
					</div>
					<Carousel.Caption>
						<div className='featured-project-text-container'>
							<h4>{project.name}</h4>
							<div className='featured-project-sources-buttons'>
								<a
									role='button'
									href={project.websiteUrl}
									className='btns btn-demo'
								>
									DEMO
								</a>
								<a
									role='button'
									href={project.githubUrl}
									target='_blank'
									className='btns btn-github'
								>
									GITHUB
								</a>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};
export default Project;
