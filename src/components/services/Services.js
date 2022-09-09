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
			header: 'UI/UX Design',
			paragraph:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem expedita explicabo eius culpa placeat.',
		},
		{
			id: 2,
			icon: <FaCode className='ic ic-code' />,
			header: 'Web Development',
			paragraph:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem expedita explicabo eius culpa placeat.',
		},
		{
			id: 3,
			icon: <FaVideo className='ic ic-video' />,
			header: 'Movie Editing',
			paragraph:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem expedita explicabo eius culpa placeat.',
		},
	];

	return (
		<section className='section-services'>
			<div className='wrapper services-container'>
				<SectionHeaders
					upperText='SERVICES'
					lowerText='My Services'
					headersParagraph={headersParagraph}
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
