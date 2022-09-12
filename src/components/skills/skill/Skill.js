import './Skill.css';
const Skill = ({ skillName, image, level, color }) => {
	return (
		<div className='skill-container'>
			<h4 className='skill-name'>{skillName}</h4>
			<img className='skill-image' src={image} alt={skillName} />
			<div className='skill-max-level'>
				<div
					className='skill-my-level'
					style={{ width: level, backgroundColor: color }}
				></div>
			</div>
		</div>
	);
};

export default Skill;
