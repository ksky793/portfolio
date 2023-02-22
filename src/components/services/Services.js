import './Services.scss';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import ServicesColumn from './servicesColumn/ServicesColumn';
import { FaVideo, FaProjectDiagram, FaCode } from 'react-icons/fa';

const servicesColumns = [
	{
		id: 1,
		icon: <FaProjectDiagram className='ic ic--big m-b--20' />,
		header: 'Web Design',
		paragraph:
			'I have created designs for websites and mobile apps using Adobe XD',
	},
	{
		id: 2,
		icon: <FaCode className='ic ic--big m-b--20' />,
		header: 'Web Development',
		paragraph:
			'I have built responsive websites that will work on any device, big or small usually using React JS',
	},
	{
		id: 3,
		icon: <FaVideo className='ic ic--big m-b--20' />,
		header: 'Movie Editing',
		paragraph: 'I have edited some clips using Final Cut Pro',
	},
];
const Services = () => {
	return (
		<section className='services' id='services'>
			<div data-aos='fade-up' className='wrapper services__container'>
				<SectionHeaders upperText='SERVICES' lowerText='My Services' />

				<div className='services__container__cards'>
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
