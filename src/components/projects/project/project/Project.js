import { AiOutlineArrowRight } from 'react-icons/ai';
import netflix from '../../../../assets/images/netflix.png';
import portfolio from '../../../../assets/images/portfolio.png';
import notatnik from '../../../../assets/images/notatnik.png';
import hotels from '../../../../assets/images/hotels.png';
import ecommerce from '../../../../assets/images/ecommerce.png';
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
			name: 'Ecommerce Cleaning Products (in progress)',
			image: ecommerce,
			// websiteUrl: 'https://portfolio-e13cf.web.app',
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
								{project.name.includes('Ecommerce') ? (
									<button
										className='btns btn-demo'
										onClick={() => alert('still in progress')}
									>
										IN PROGRESS
									</button>
								) : (
									<a
										role='button'
										href={project.websiteUrl}
										className='btns btn-demo'
										target='_blank'
									>
										DEMO
									</a>
								)}
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
