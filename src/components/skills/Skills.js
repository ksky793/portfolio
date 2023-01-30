import './Skills.css';
import SectionHeaders from '../sectionHeaders/SectionHeaders';
import Skill from './skill/Skill';
const Skills = () => {
	const experiences = [
		{
			skillName: 'HTML',
			image:
				'https://pl.seaicons.com/wp-content/uploads/2015/07/Other-html-5-icon.png',
		},
		{
			skillName: 'REACT.JS',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
		},
		{
			skillName: 'CSS',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
		},
		{
			skillName: 'JAVASCRIPT',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
		},
		{
			skillName: 'TYPESCRIPT',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1920px-Typescript.svg.png',
		},
		{
			skillName: 'SQL',
			image:
				'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Oracle_SQL_Developer_logo.svg/800px-Oracle_SQL_Developer_logo.svg.png',
		},
		{
			skillName: 'ADOBE XD',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/800px-Adobe_XD_CC_icon.svg.png',
		},
		{
			skillName: 'GIT',
			image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
		},
		{
			skillName: 'VS CODE',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png',
		},
	];
	return (
		<section className='section-skills' id='skills'>
			<div data-aos='fade-up' className='wrapper skills-container'>
				<SectionHeaders
					upperText='What Skills I Have'
					lowerText='My Tech Stack'
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
