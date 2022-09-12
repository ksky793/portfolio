import { AiOutlineArrowRight } from 'react-icons/ai';
import netflix from '../../../../assets/images/netflix.png';
import portfolio from '../../../../assets/images/portfolio.png';
import './Project.css';
import Carousel from 'react-bootstrap/Carousel';
const Project = () => {
	const projects = [
		{
			name: 'Portfolio',
			image: portfolio,
			websiteUrl: 'www.google.com',
			githubUrl: 'https://github.com/ksky793/portfolio',
		},
		{
			name: 'Netflix Clone',
			image: netflix,
			websiteUrl: 'www.google.com',
			githubUrl: 'https://github.com/ksky793/NetflixClone',
		},
		// {
		// 	name: 'Portfolio',
		// 	image: portfolio,
		// 	websiteUrl: 'www.google.com',
		// 	githubUrl: 'www.google.com',
		// },
		// {
		// 	name: 'Portfolio',
		// 	image: portfolio,
		// 	websiteUrl: 'www.google.com',
		// 	githubUrl: 'www.google.com',
		// },
	];
	console.log(projects[0].image);
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
								<a role='button' className='btns btn-demo'>
									DEMO
								</a>
								<a
									role='button'
									href={project.githubUrl}
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

{
	/* <img
									src={project.image}
									alt={project.name}
									className='featured-project-image'
								/> */
}
export default Project;
