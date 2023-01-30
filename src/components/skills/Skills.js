import './Skills.css';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import Skill from './skill/Skill';
const Skills = () => {
	const experiences = [
		{
			skillName: 'HTML',
			image:
				'https://pl.seaicons.com/wp-content/uploads/2015/07/Other-html-5-icon.png',
			level: '85%',
			color: '#F16529',
		},
		{
			skillName: 'REACT.JS',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
			level: '60%',
			color: '#61DAFB',
		},
		{
			skillName: 'CSS',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			level: '75%',
			color: '#2965F1',
		},
		{
			skillName: 'JAVASCRIPT',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
			level: '80%',
			color: '#F7DF3B',
		},
		{
			skillName: 'TYPESCRIPT',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1920px-Typescript.svg.png',
			level: '50%',
			color: '#61DAFB',
		},
		{
			skillName: 'SQL',
			image:
				'https://icon2.cleanpng.com/20180802/fh/kisspng-clip-art-microsoft-azure-sql-database-microsoft-sq-skills-5b63119fad8f06.3803801615332192317109.jpg',
			level: '50%',
			color: '#1472C6',
		},
	];
	return (
		<section className='section-skills' id='skills'>
			<div data-aos='fade-up' className='wrapper skills-container'>
				<SectionHeaders
					upperText='What Skills I Have'
					lowerText='My Experience'
				/>

				<div className='skills-icons'>
					{experiences.map((skill, index) => (
						<Skill
							key={index}
							skillName={skill.skillName}
							image={skill.image}
							level={skill.level}
							color={skill.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
