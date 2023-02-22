import 'react-icons/fa';
import Card from '../../card/Card';
const ServicesColumn = (props) => {
	const { icon, header, paragraph } = props;
	return (
		<Card modifier='services'>
			{icon}
			<h4 className='card__header card__header--size-services'>{header}</h4>
			<p className='card__paragraph card__paragraph--size-service'>
				{paragraph}
			</p>
		</Card>
	);
};

export default ServicesColumn;
