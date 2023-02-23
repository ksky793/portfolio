import './Card.scss';
const Card = (props) => {
	const { children, modifier } = props;
	return (
		<div
			className={`card card--size-${modifier} ${
				modifier === 'services' ? 'm-b--30' : ''
			}`}
		>
			{children}
		</div>
	);
};

export default Card;
