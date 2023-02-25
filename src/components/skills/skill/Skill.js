import './Skill.scss';
const Skill = ({ skillName, image }) => {
	return (
		<div className='skill'>
			<h4 className='skill__name'>{skillName}</h4>
			<img className='skill__image' src={image} alt={skillName} />
		</div>
	);
};

export default Skill;
