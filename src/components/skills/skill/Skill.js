import './Skill.css';
const Skill = ({ skillName, image, level, color }) => {
	return (
		<div className='skill-container'>
			<h4 className='skill-name'>{skillName}</h4>
			<img className='skill-image' src={image} alt={skillName} />
		</div>
	);
};

export default Skill;
