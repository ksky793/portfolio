import './Services.css';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import ServicesColumn from './servicesColumn/ServicesColumn';
import { FaVideo, FaProjectDiagram, FaCode } from 'react-icons/fa';

const Services = () => {
	const headersParagraph =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque aperiam ab sint ad quibusdam sapiente nihil tempore odio laborum tempora';

	const servicesColumns = [
		{
			id: 1,
			icon: <FaProjectDiagram className='ic ic-project-diagram' />,
			header: 'Web Design',
			paragraph:
				'I have created designs for websites and mobile apps using Adobe XD',
		},
		{
			id: 2,
			icon: <FaCode className='ic ic-code' />,
			header: 'Web Development',
			paragraph:
				'I have built responsive websites that will work on any device, big or small usually using React JS',
		},
		{
			id: 3,
			icon: <FaVideo className='ic ic-video' />,
			header: 'Movie Editing',
			paragraph: 'I have edited some clips using Final Cut Pro',
		},
	];

	return (
		<section className='section-services' id='services'>
			<div data-aos='fade-up' className='wrapper services-container'>
				<SectionHeaders
					upperText='SERVICES'
					lowerText='My Services'
					// headersParagraph={headersParagraph}
				/>

				<div className='services-row'>
					{servicesColumns.map((column) => (
						<ServicesColumn
							key={column.id}
							icon={column.icon}
							header={column.header}
							paragraph={column.paragraph}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
